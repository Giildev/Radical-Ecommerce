const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/api/hello', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({ object: 'Hello from Node.js' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));