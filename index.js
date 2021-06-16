// import routes from './src/routes/index';
require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const routes = require('./src/routes');

const app = express();

const port = process.env.PORT;

const url = process.env.URL;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect
  .then(() => {
    // app.listen(port);
    console.log('ok...');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
app.use('/api/', routes());

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});

app.use(express.static('public'));
