const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;