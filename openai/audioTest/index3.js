// Imports the Google Cloud client library
const fs = require('fs');
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const filename = 'Local path to audio file, e.g. /path/to/audio.raw';
// const encoding = 'Encoding of the audio file, e.g. LINEAR16';
// const sampleRateHertz = 16000;
// const languageCode = 'BCP-47 language code, e.g. en-US';

const config = {
  encoding: 'LINEAR16',
  // sampleRateHertz: 16000,
  languageCode: 'en-US',
};
const audio = {
  content: fs.readFileSync('./output2.wav'),
};

const request = {
  config: config,
  audio: audio,
};

client.recognize(request).then(([response]) => {
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log('Transcription: ', transcription);
})
// Detects speech in the audio file
// const [response] = await client.recognize(request);
// const transcription = response.results
//   .map(result => result.alternatives[0].transcript)
//   .join('\n');
// console.log('Transcription: ', transcription);