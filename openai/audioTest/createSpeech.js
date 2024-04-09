import fs from "fs";
import path from "path";
import OpenAI from "openai";
import apiKey from '../apiKey.js';

const openai = new OpenAI({
    apiKey
});

const speechFile = path.resolve("./speech.wav");

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "Today is a wonderful day to build something people love!",
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
main();