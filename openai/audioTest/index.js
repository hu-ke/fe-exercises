
const recorder = require('node-record-lpcm16');
const { SpeechClient } = require('@google-cloud/speech');

// Create a SpeechClient instance
const speechClient = new SpeechClient();

// Configure audio settings
const audioConfig = {
  encoding: 'LINEAR16', // Specify the audio encoding format
  // sampleRateHertz: 16000, // Specify the sample rate (Hz)
  sampleRateHertz: 44100, // Sample rate (Hz)
  languageCode: 'zh', // Specify the language code
};

// Create a recognize stream
const recognizeStream = speechClient
  .streamingRecognize({
    config: audioConfig,
  })
  .on('error', console.error)
  .on('data', data =>
    process.stdout.write(
      data.results[0] && data.results[0].alternatives[0]
        ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
        : '\n\nReached transcription time limit, press Ctrl+C\n'
    )
  );

// Start recording audio
recorder.record({
  sampleRateHertz: audioConfig.sampleRateHertz,
  threshold: 0,
  verbose: false,
  channels: 1, // Number of audio channels
}).stream().pipe(recognizeStream);

console.log('Listening, press Ctrl+C to stop.');
