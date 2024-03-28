const record = require('node-record-lpcm16');
const OpenAI = require("openai");
const openai = new OpenAI({
});

// OpenAI API endpoint
// const API_ENDPOINT = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
const API_ENDPOINT = 'https://api.openai.com/v1/audio/transcriptions'

// Function to send audio chunk to OpenAI API
async function sendAudioChunk(chunk) {
    try {
        // Convert chunk to base64
        const base64Audio = Buffer.from(chunk).toString('base64');

        const transcription = await openai.audio.transcriptions.create({
            // file: fs.createReadStream("./speech.mp3"),
            file: base64Audio,
            model: "whisper-1",
          });

        console.log(transcription.text);

        // Make request to OpenAI API
        // const response = await axios.post(
        //     API_ENDPOINT,
        //     {
        //         prompt: 'Transcribe the following speech:\n',
        //         model: 'whisper-1',
        //         max_tokens: 100,
        //         audio: base64Audio,
        //         file: base64Audio,
        //         audio_content_type: 'audio/raw',
        //     },
        //     {
        //         headers: {
        //             Authorization: `Bearer ${apiKey}`,
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     }
        // );

        // // Extract and return the transcription
        // return response.data.choices[0].text.trim();
    } catch (error) {
        console.log('Error', error.response)
        // console.error('Error:', error.response.data.error.message);
        return null;
    }
}

// Start recording audio and transcribe in real-time
async function startRecordingAndTranscribe() {
    console.log('Recording started...');
    record.record({
        sampleRateHertz: 16000,
        threshold: 0, // Silence threshold
        verbose: false,
        recordProgram: 'rec', // UNIX command for recording
    }).stream().pipe(
        // Pipe recorded audio stream for processing
        require('pcm-stream')()
    ).on('data', async (chunk) => {
        try {
            const transcription = await sendAudioChunk(chunk);
            console.log('Transcription:', transcription);
        } catch (error) {
            console.error('Error:', error);
        }
    });
    // recorder.record({
    //     sampleRate: 44100
    //   })
    //   .stream()
    //   .pipe(recognizeStream)
}

// Start recording and transcription
startRecordingAndTranscribe().catch(console.error);