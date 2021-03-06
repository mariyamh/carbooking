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
  Modal: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Modal' }],
});
const Car = mongoose.model('Car', carSchema);
module.exports = Car;
