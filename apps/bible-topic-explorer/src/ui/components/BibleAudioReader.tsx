import { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { requireOptionalNativeModule } from 'expo-modules-core';
import type { BibleVerse } from '../../product/adapters';
import type { Theme } from '../theme';
import { Action } from '../primitives';

type SpeechState = 'initializing' | 'idle' | 'playing' | 'paused' | 'finished' | 'error' | 'unavailable';
type Status = { ready: boolean; state: SpeechState; verseIndex: number; message?: string };
type Voice = { id: string; label: string };
type Subscription = { remove(): void };
type AndroidBibleSpeech = {
  addListener(event: 'onSpeechState', callback: (status: Status) => void): Subscription;
  getStatus(): Status;
  getVoices(): Voice[];
  setVoice(voiceId: string): void;
  setSpeed(speed: number): void;
  start(texts: string[]): void;
  pause(): void;
  resume(): void;
  stop(): void;
};

// An Expo local module is available only in a native APK, not Expo Go or web.
const androidSpeech = Platform.OS === 'android'
  ? requireOptionalNativeModule<AndroidBibleSpeech>('BibleSpeech')
  : null;
const speeds = [0.8, 0.9, 1, 1.2] as const;

export function BibleAudioReader({ theme, verses, onActiveVerseChange }: {
  theme: Theme;
  verses: readonly BibleVerse[];
  onActiveVerseChange: (index: number | null) => void;
}) {
  const [status, setStatus] = useState<Status>({ ready: false, state: 'initializing', verseIndex: 0 });
  const [voices, setVoices] = useState<Voice[]>([]);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [speedIndex, setSpeedIndex] = useState(1);

  useEffect(() => {
    if (!androidSpeech) {
      setStatus({ ready: false, state: 'unavailable', verseIndex: 0 });
      return;
    }
    const subscription = androidSpeech.addListener('onSpeechState', (event) => {
      setStatus(event);
      if (event.ready) setVoices(androidSpeech.getVoices());
      onActiveVerseChange(event.state === 'playing' || event.state === 'paused' ? event.verseIndex : null);
    });
    const initialStatus = androidSpeech.getStatus();
    setStatus(initialStatus);
    if (initialStatus.ready) setVoices(androidSpeech.getVoices());
    return () => {
      subscription.remove();
      androidSpeech.stop();
      onActiveVerseChange(null);
    };
  }, []);

  const chooseSpeed = () => {
    const next = (speedIndex + 1) % speeds.length;
    setSpeedIndex(next);
    androidSpeech?.setSpeed(speeds[next]);
  };
  const chooseVoice = () => {
    if (voices.length < 2) return;
    const next = (voiceIndex + 1) % voices.length;
    setVoiceIndex(next);
    androidSpeech?.setVoice(voices[next].id);
  };
  const readChapter = () => {
    if (!status.ready || !verses.length) return;
    androidSpeech?.setSpeed(speeds[speedIndex]);
    androidSpeech?.start(verses.map(verse => verse.text));
  };

  const label: string =
    status.state === 'playing' ? `Leyendo versículo ${status.verseIndex + 1} de ${verses.length}` :
    status.state === 'paused' ? `Pausado en versículo ${status.verseIndex + 1}` :
    status.state === 'finished' ? 'Lectura del capítulo completada.' :
    status.state === 'initializing' ? 'Preparando el motor de voz de Android…' :
    status.state === 'unavailable' ? 'Motor de voz en español no disponible. Instala una voz desde Ajustes de Android.' :
    status.state === 'error' ? status.message ?? 'No se pudo reproducir el capítulo.' :
    'Lectura en voz alta lista.';

  return (
    <View accessibilityLabel="Lector de Biblia en voz alta" style={{
      padding: 12, borderRadius: 12, backgroundColor: theme.surfaceSoft,
      borderColor: theme.border, borderWidth: 1, gap: 8,
    }}>
      <Text style={{ color: theme.text, fontSize: 16, fontWeight: '700' }}>Escuchar este capítulo</Text>
      <Text accessibilityLiveRegion="polite" style={{ color: theme.secondary }}>{label}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {status.ready && status.state !== 'playing' && status.state !== 'paused'
          ? <Action label="▶ Leer capítulo" theme={theme} onPress={readChapter} />
          : null}
        {status.state === 'playing'
          ? <Action label="Ⅱ Pausar" variant="secondary" theme={theme} onPress={() => androidSpeech?.pause()} />
          : null}
        {status.state === 'paused'
          ? <Action label="▶ Reanudar" theme={theme} onPress={() => androidSpeech?.resume()} />
          : null}
        {status.state === 'paused' || status.state === 'playing'
          ? <Action label="■ Detener" variant="secondary" theme={theme} onPress={() => androidSpeech?.stop()} />
          : null}
      </View>
      {status.ready ? <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
        <Action label={`Velocidad ${speeds[speedIndex].toFixed(1).replace('.', ',')}×`}
          variant="secondary" theme={theme} onPress={chooseSpeed} />
        {voices.length > 1
          ? <Action label={`Cambiar voz (${voiceIndex + 1}/${voices.length})`}
              variant="secondary" theme={theme} onPress={chooseVoice} />
          : null}
      </View> : null}
      {status.ready && voices.length === 0
        ? <Text style={{ color: theme.secondary, fontSize: 12 }}>Para escuchar sin conexión, descarga una voz española en los ajustes de voz de Android.</Text>
        : null}
      {status.ready && voices.length > 0
        ? <Text style={{ color: theme.secondary, fontSize: 12, flexShrink: 1 }}>
          Voz local: {voices[Math.min(voiceIndex, voices.length - 1)].label}
        </Text>
        : null}
    </View>
  );
}
