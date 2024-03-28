import fs from "fs";
import OpenAI from "openai";
import apiKey from './apiKey.js';

const openai = new OpenAI({
    apiKey
});

import recorder from 'node-record-lpcm16'
// const fs = require('fs')

// const file = fs.createWriteStream('test3.wav', { encoding: 'binary' })


// .pipe(file)


async function main() {
  const transcription = await openai.audio.transcriptions.create({
    // file: fs.createReadStream("./speech.mp3"),
    file: recorder.record({
        sampleRate: 44100
      })
      .stream(),
    model: "whisper-1",
  });

  console.log(transcription.text);
}
main();