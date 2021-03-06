import routes from './src/routes/index';

require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT;

const url = process.env.URL;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect
  .then(() => {
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('Car booking app is running');
});
app.use('/api/', routes());
app.use(express.static('public'));
