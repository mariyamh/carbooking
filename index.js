/* eslint-disable no-console */
// import routes from './src/routes/index';
require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const routes = require('./src/routes');

const app = express();

const port = process.env.PORT;

const url = process.env.URL;

const connectOpt = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectDb = async () => {
  try {
    await mongoose.connect(url, connectOpt);

    // eslint-disable-next-line no-console
    console.info(`Connected to database on Worker process: ${process.pid}`);
  } catch (error) {
    console.error('Connection error');
  }
};
connectDb();

app.use('/api/', routes());

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});

app.use(express.static('public'));
