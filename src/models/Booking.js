const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookingSchema = new Schema({
  carId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  cars: [{ type: mongoose.Types.ObjectId, ref: 'Car' }],
});
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
