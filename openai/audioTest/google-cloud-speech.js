const fs = require('fs');
const { SpeechClient } = require('@google-cloud/speech');

async function transcribeMP3() {
    // Create a SpeechClient instance
    const speechClient = new SpeechClient();

    // Configure audio settings
    const audioConfig = {
        encoding: 'MP3',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
    };

    // Read the audio file
    const audioFilePath = './speech.mp3'; // Path to the converted WAV file
    const audioContent = fs.readFileSync(audioFilePath);

    // Perform speech recognition
    const [response] = await speechClient.recognize({
        audio: {
            content: audioContent,
        },
        config: audioConfig,
    });

    // Print transcription
    const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
    console.log('Transcription:', transcription);
}

transcribeMP3().catch(console.error);
