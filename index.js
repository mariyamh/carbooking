/* eslint-disable no-console */
// eslint-disable-next-line no-console

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
    // eslint-disable-next-line no-console
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
    // eslint-disable-next-line comma-dangle
  });

app.get('/', (req, res) => {
  res.send('Car booking app is running');
});

const userRouter = require('./Routes/userRouter');

const modalRouter = require('./Routes/modalRouter');

const carRouter = require('./Routes/carRouter');

const bookingRouter = require('./Routes/bookingRouter');

app.use('/users', userRouter);

app.use('/modals', modalRouter);

app.use('/cars', carRouter);

app.use('/bookings', bookingRouter);

app.use(express.static('public'));
// eslint-disable-next-line no-console
// app.listen(port, () => console.log(`server is listing on port ${port}`));
