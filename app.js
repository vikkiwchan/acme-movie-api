const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <html>
    <p>Hello</p>
    <body>
    <h1>The Acme Movie API TEST</h1>
    </body>
  </html>
  `);
});

module.exports = app;
