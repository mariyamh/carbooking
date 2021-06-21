const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

// eslint-disable-next-line new-cap
const modalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});
const Modal = mongoose.model('Modal', modalSchema);
module.exports = Modal;
