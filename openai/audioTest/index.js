const recorder = require('node-record-lpcm16')
const speech = require('@google-cloud/speech');
const fs = require('fs')
const client = new speech.SpeechClient();

recognizeStream = client
    .streamingRecognize({
      config: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
      },
      interimResults: true,
    })
    .on('error', console.error)
    .on('data', data => {
      if (data.results[0] && data.results[0].alternatives[0]) {
        const transcription = data.results[0].alternatives[0].transcript;
        console.log('transcription', transcription)
      }
    });
    
// const file = fs.createWriteStream('test.wav', { encoding: 'binary' })

recorder.record({
  sampleRate: 44100
})
.stream()
.pipe(recognizeStream)

// recorder.record({
//     sampleRateHertz: 16000,
//     threshold: 0,
//     verbose: false,
//     recordProgram: 'rec',
//     silence: '10.0',
//   })
//   .on('error', console.error)
//   .pipe(recognizeStream);