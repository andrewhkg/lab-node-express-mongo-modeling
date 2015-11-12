var mongoose = require('mongoose');

var AirportSchema = new mongoose.Schema({
  name: String,
  conutry: String,
  dob: Date,
  terminals: Array,
  opened: Date
});

var Airport = mongoose.model('Airport', AirportSchema);
module.exports = Airport;