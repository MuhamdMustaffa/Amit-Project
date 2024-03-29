// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
