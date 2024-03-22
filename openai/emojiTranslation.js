import OpenAI from "openai";
import apiKey from './apiKey.js';

const openai = new OpenAI({
    apiKey
});

async function main() {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "You will be provided with text, and your task is to translate it into emojis. Do not use any regular text. Do your best with emojis only."
          },
          {
            "role": "user",
            "content": "I lossed my dog in today morning, i'm so sad"
          }
        ],
        temperature: 0.8,
        max_tokens: 64,
        top_p: 1,
    });
    console.log(response.choices[0])
}

main();