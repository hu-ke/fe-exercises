const recorder = require('node-record-lpcm16')

// 开始录制音频
const audioStream = recorder.record({
    sampleRateHertz: 16000,
    threshold: 0, // Silence threshold
    verbose: false,
    recordProgram: 'rec', // UNIX command for recording
}).stream().pipe(
    // Pipe recorded audio stream for processing
    require('pcm-stream')()
).on('data', async (chunk) => {
    console.log('chunk', chunk)
    // try {
    //     const transcription = await sendAudioChunk(chunk);
    //     console.log('Transcription:', transcription);
    // } catch (error) {
    //     console.error('Error:', error);
    // }
});


