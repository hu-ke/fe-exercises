

import OpenAI from "openai";
import apiKey from './apiKey.js';

const openai = new OpenAI({
    apiKey
});

async function main() {
    const image = await openai.images.generate({ prompt: "来一张航空母舰的图片" });
    console.log(image.data);
}

main();

