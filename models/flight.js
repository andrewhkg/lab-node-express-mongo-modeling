var mongoose = require('mongoose');

var FlightSchema = new mongoose.Schema({
  from: String,
  to: String,
  airline: String,
  passengers: [{type: mongoose.Schema.Types.ObjectId, ref: "Passenger"}]
});

var Flight = mongoose.model('Flight', FlightSchema);
module.exports = Flight;


