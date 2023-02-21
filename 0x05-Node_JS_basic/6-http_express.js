/**
 * Create a small HTTP server using Express
 */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const PORT = 1245;
app.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}`));
