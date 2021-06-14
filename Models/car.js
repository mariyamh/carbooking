const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

// eslint-disable-next-line new-cap
const carSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
const Car = mongoose.model('Car', carSchema);
module.exports = Car;
