const Microphone = require('node-microphone');
const { spawn } = require('child_process');

// Create a microphone instance
const mic = new Microphone({
  debug: true,
  rate: 16000, // Sample rate in Hz
  channels: 1, // Number of audio channels
  device: 'plughw:1,0', // Adjust based on your audio device
});

// Start capturing audio
mic.startRecording();

// Spawn pocketsphinx_continuous process for real-time transcription
const pocketsphinx = spawn('pocketsphinx_continuous', ['-inmic', 'yes', '-hmm', '/usr/local/share/pocketsphinx/model/en-us/en-us', '-lm', 'en-us.lm.bin', '-dict', 'cmudict-en-us.dict']);

// Listen for data events from pocketsphinx
pocketsphinx.stdout.on('data', (data) => {
  console.log(`Transcription: ${data}`);
});

// Handle error events
pocketsphinx.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

// Handle process exit
pocketsphinx.on('exit', (code, signal) => {
  console.log(`PocketSphinx process exited with code ${code} and signal ${signal}`);
});

// Stop microphone and pocketsphinx process on SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  mic.stopRecording();
  pocketsphinx.kill('SIGINT');
  process.exit();
});