package expo.modules.biblespeech

import android.os.Handler
import android.os.Looper
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.util.Locale

/**
 * Android's installed TTS engine speaks only chapter text provided by the RV1909 repository.
 * The app does not upload Scripture or notes to a speech service.
 * Pause/resume re-enters at the latest engine-provided range boundary; without range callbacks,
 * the current verse is replayed from the start instead of claiming sample-accurate seeking.
 */
class BibleSpeechModule : Module() {
  private val main = Handler(Looper.getMainLooper())
  private var tts: TextToSpeech? = null
  @Volatile private var ready = false
  @Volatile private var state = "initializing"
  private var chapter: List<String> = emptyList()
  private var verseIndex = 0
  private var offset = 0
  private var utteranceBase = 0
  private var currentUtterance: String? = null
  private var serial = 0L
  private var speed = 0.9f

  override fun definition() = ModuleDefinition {
    Name("BibleSpeech")
    Events("onSpeechState")

    OnCreate { initialize() }
    OnDestroy {
      main.post {
        currentUtterance = null
        tts?.stop()
        tts?.shutdown()
        tts = null
        ready = false
      }
    }

    Function("getStatus") {
      mapOf("ready" to ready, "state" to state, "verseIndex" to verseIndex)
    }

    Function("getVoices") {
      tts?.voices.orEmpty()
        .filter { it.locale.language == "es" && !it.isNetworkConnectionRequired }
        .sortedBy { it.name }
        .map { mapOf("id" to it.name, "label" to it.locale.toLanguageTag() + " · " + it.name) }
    }

    Function("setVoice") { voiceId: String ->
      main.post {
        val voice = tts?.voices?.firstOrNull {
          it.name == voiceId && it.locale.language == "es" && !it.isNetworkConnectionRequired
        }
        if (voice != null) {
          if (tts?.setVoice(voice) == TextToSpeech.ERROR) {
            reportError("El motor no pudo seleccionar la voz.")
          } else emit()
        }
      }
    }

    Function("setSpeed") { value: Double ->
      main.post {
        if (value.isFinite()) {
          speed = value.toFloat().coerceIn(0.7f, 1.4f)
          tts?.setSpeechRate(speed)
        }
      }
    }

    Function("start") { texts: List<String> ->
      main.post {
        if (!ready) {
          reportError("La voz española no está disponible. Revisa las voces instaladas en Android.")
        } else {
          currentUtterance = null
          tts?.stop()
          chapter = texts
          verseIndex = 0
          offset = 0
          if (chapter.isEmpty()) {
            state = "idle"
            emit()
          } else {
            speakCurrent()
          }
        }
      }
    }

    Function("pause") {
      main.post {
        if (state == "playing") {
          currentUtterance = null
          state = "paused"
          tts?.stop()
          emit()
        }
      }
    }

    Function("resume") {
      main.post {
        if (state == "paused" && chapter.isNotEmpty() && ready) speakCurrent()
      }
    }

    Function("stop") {
      main.post {
        currentUtterance = null
        tts?.stop()
        chapter = emptyList()
        verseIndex = 0
        offset = 0
        state = if (ready) "idle" else "unavailable"
        emit()
      }
    }
  }

  private fun initialize() {
    val context = appContext.reactContext?.applicationContext ?: run {
      state = "unavailable"
      emit()
      return
    }
    tts = TextToSpeech(context) { result ->
      main.post {
        val engine = tts
        if (result != TextToSpeech.SUCCESS || engine == null) {
          state = "unavailable"
          ready = false
          emit()
        } else {
          val installedSpanish = engine.voices.orEmpty()
            .filter { it.locale.language == "es" && !it.isNetworkConnectionRequired }
            .sortedBy { it.name }
          if (installedSpanish.isNotEmpty()) engine.voice = installedSpanish.first()
          else {
            val resultLanguage = engine.setLanguage(Locale.forLanguageTag("es-ES"))
            if (resultLanguage == TextToSpeech.LANG_NOT_SUPPORTED ||
                resultLanguage == TextToSpeech.LANG_MISSING_DATA) {
              ready = false
              state = "unavailable"
              emit()
              return@post
            }
          }
          engine.setSpeechRate(speed)
          engine.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
            override fun onStart(utteranceId: String) {
              main.post { if (utteranceId == currentUtterance) emit() }
            }
            override fun onRangeStart(utteranceId: String, start: Int, end: Int, frame: Int) {
              main.post {
                if (utteranceId == currentUtterance) {
                  offset = (utteranceBase + start).coerceIn(0, chapter.getOrNull(verseIndex)?.length ?: 0)
                }
              }
            }
            override fun onDone(utteranceId: String) {
              main.post {
                if (utteranceId != currentUtterance || state != "playing") return@post
                currentUtterance = null
                verseIndex++
                offset = 0
                if (verseIndex < chapter.size) speakCurrent()
                else {
                  state = "finished"
                  emit()
                }
              }
            }
            override fun onError(utteranceId: String) {
              main.post { if (utteranceId == currentUtterance) reportError("Falló la lectura por voz.") }
            }
            override fun onError(utteranceId: String, errorCode: Int) {
              main.post { if (utteranceId == currentUtterance) reportError("El motor de voz devolvió un error ($errorCode).") }
            }
          })
          ready = true
          state = "idle"
          emit()
        }
      }
    }
  }

  private fun speakCurrent() {
    val engine = tts ?: return reportError("Motor TTS no disponible.")
    while (verseIndex < chapter.size && chapter[verseIndex].isBlank()) {
      verseIndex++
      offset = 0
    }
    if (verseIndex >= chapter.size) {
      state = "finished"
      currentUtterance = null
      emit()
      return
    }
    val text = chapter[verseIndex]
    utteranceBase = offset.coerceIn(0, text.length)
    val remaining = text.substring(utteranceBase)
    if (remaining.isBlank()) {
      verseIndex++
      offset = 0
      speakCurrent()
      return
    }
    val id = "rv1909-${++serial}"
    currentUtterance = id
    state = "playing"
    engine.setSpeechRate(speed)
    val result = engine.speak(remaining, TextToSpeech.QUEUE_FLUSH, null, id)
    if (result == TextToSpeech.ERROR) reportError("No se pudo iniciar la lectura.")
    else emit()
  }

  private fun reportError(message: String) {
    currentUtterance = null
    tts?.stop()
    state = "error"
    sendEvent("onSpeechState", mapOf(
      "ready" to ready, "state" to state, "verseIndex" to verseIndex, "message" to message
    ))
  }

  private fun emit() {
    sendEvent("onSpeechState", mapOf(
      "ready" to ready, "state" to state, "verseIndex" to verseIndex
    ))
  }
}
