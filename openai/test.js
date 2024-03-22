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
          "content": "日常生活小助理，回答尽可能详细，至少10点"
        },
        {
          "role": "user",
          "content": "坐月子的注意事项"
        }
      ],
      temperature: 0.8,
      top_p: 1,
  });
  console.log(response.choices[0])
}


main();