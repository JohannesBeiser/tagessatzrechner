const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
const fs = require('fs').promises;

// Port Number
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'frontend/dist/frontend')));

app.get('/', (req, res) => {
    console.log("endpoint reached")
  res.send('invaild endpoint lel');
});

app.get('/audio', (req, res) => {
  console.log("endpoint audio reached")
res.send('audio endpoint');
});


const client = new speech.SpeechClient();


app.post('/audio', (req, res) => {
  let chunks = [];
  req.on('data', (chunk) => {
      chunks.push(chunk)
  });
  req.on('end', async () => {
      let buffer = Buffer.concat(chunks);   

      // Reads a local audio file and converts it to base64
      const audioBytes = buffer.toString('base64');
    
      // The audio file's encoding, sample rate in hertz, and BCP-47 language code
      const audio = {
        content: audioBytes,
      };
      const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'de-DE',
      };
      const request = {
        audio: audio,
        config: config,
      };
    
      // Detects speech in the audio file
      const [response] = await client.recognize(request);
      const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
      console.log(`Transcription: ${transcription}`);
      res.send({
          transcription: transcription
      });
  });
});



// Creates a client

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/frontend/index.html'));
});


// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
