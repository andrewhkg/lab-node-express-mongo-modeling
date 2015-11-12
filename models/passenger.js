var mongoose = require('mongoose');

var PassengerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date
});

var Passenger = mongoose.model('Passenger', PassengerSchema);
module.exports = Passenger;

