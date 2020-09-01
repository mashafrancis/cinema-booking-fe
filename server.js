const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  // lgtm [js/missing-rate-limiting]
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(process.env.PORT || 3000);
