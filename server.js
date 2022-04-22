const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Imports the Google Cloud client library

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


// Creates a client

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/frontend/index.html'));
});


// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
