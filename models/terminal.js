var mongoose = require('mongoose');

var TerminalSchema = new mongoose.Schema({
  name: String,
  flights: Array,
  capacity: Number
});

var Terminal = mongoose.model('Terminal', TerminalSchema);

module.exports = Terminal;

