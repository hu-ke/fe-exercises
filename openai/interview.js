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
            "content": "你是一个图片生成器"
          },
          {
            "role": "user",
            "content": "来一张小狗的图片"
          }
        ],
        temperature: 0.8,
        max_tokens: 64,
        top_p: 1,
    });
    console.log(response.choices[0])
}

main();