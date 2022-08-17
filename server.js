const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const api = require('./routes/notes.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// GET request
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/db', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);
  
  // POST request
  app.post('', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
    console.info(`${req.method} request received`);
  });
  
  app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
  );