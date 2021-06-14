const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

// eslint-disable-next-line new-cap
const bookingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
