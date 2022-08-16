const express = require('express');

const PORT = 3001;

const app = express();

// GET request
app.get('', (req, res) => {
    // Let the client know that their request was received
    res.json(`${req.method} request received`);
    console.info(`${req.method} request received`);
  });
  
  // POST request
  app.post('', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
    console.info(`${req.method} request received`);
  });
  
  app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
  );