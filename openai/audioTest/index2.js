const record = require('node-record-lpcm16');

// List available audio devices
record.getDevices()
  .then(devices => {
    console.log('Available audio devices:', devices);
  })
  .catch(error => {
    console.error('Error listing audio devices:', error);
  });