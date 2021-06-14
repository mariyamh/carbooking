const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

// eslint-disable-next-line new-cap
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
