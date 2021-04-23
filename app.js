const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <html>
    <p>Hello</p>
    <body>
    <h3>The Acme Movie API </h3>
    </body>
  </html>
  `);
});

module.exports = app;
