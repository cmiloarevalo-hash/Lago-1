import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const read = (path: string) => readFileSync(resolve(process.cwd(), path), 'utf8');

describe('v1.20.0 Android native Bible narration', () => {
  it('keeps the same package and upgrades versionCode', () => {
    const config = JSON.parse(read('app.json'));
    expect(config.expo.version).toBe('1.20.0');
    expect(config.expo.android.versionCode).toBe(19);
    expect(config.expo.android.package).toBe('com.lago.bibletopicexplorer');
  });
  it('links a local Kotlin Android TTS module with state and progress callbacks', () => {
    const config = JSON.parse(read('modules/bible-speech/expo-module.config.json'));
    const native = read('modules/bible-speech/android/src/main/java/expo/modules/biblespeech/BibleSpeechModule.kt');
    expect(config.android.modules).toContain('expo.modules.biblespeech.BibleSpeechModule');
    for (const expected of ['TextToSpeech(', 'UtteranceProgressListener()', 'onRangeStart(', 'onDone(', 'Function("pause")', 'Function("resume")', 'Function("stop")']) {
      expect(native).toContain(expected);
    }
  });
  it('narrates unmodified SQLite verse text and cleans up when leaving the reader', () => {
    const reader = read('src/ui/screens/BibleScreen.tsx');
    const audio = read('src/ui/components/BibleAudioReader.tsx');
    expect(reader).toContain('BibleAudioReader');
    expect(reader).toContain('audioVerseIndex===verseIndex');
    expect(audio).toContain('verses.map(verse => verse.text)');
    expect(audio).toContain('androidSpeech.stop()');
    expect(audio).toContain('Cambiar voz');
    expect(audio).toContain('Velocidad');
  });
});
