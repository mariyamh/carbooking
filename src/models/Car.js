const mongoose = require('mongoose');

const { Schema } = mongoose;
const carSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  plateNo: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  Modal: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Modal' }],
  Bookings: [{ type: mongoose.Types.ObjectId, ref: 'Booking' }],
});
const Car = mongoose.model('Car', carSchema);
module.exports = Car;
