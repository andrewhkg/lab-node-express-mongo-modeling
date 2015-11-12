var express = require('express');
var path = require('path');
// var debug = require("debug");
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var expressLayouts = require('express-ejs-layouts');
var app = express();
var router = express.Router();

var moongoose = require('mongoose');
moongoose.connect('mongodb://127.0.0.1/hkg');

//MIDLEWARE
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

Passenger = require("./models/passenger");
Flight    = require("./models/flight");
Airport   = require("./models/airport");
Terminal  = require("./models/terminal");

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.listen(process.env.PORT || 3000 );
console.log("Server Started");

Passenger.find({}, function (err, passengers) {
  console.log(passengers);
});

Flight.findById("564442baa24a49da3444b0a9", function (err, flight){
  Passenger.findById("564434b0a24a49da3444b0a3", function (err, passenger){
    flight.passengers.push(passenger);
    flight.save(function(err){
      console.log("Passenger Added")
    });
    console.log(flight);
  });
});


// Airport.findOne({"Name":"JFK"}, function (err, airports) {
//   var flight1 = new Flight ({
//     from: 'CDG',
//     to: 'JFK',
//     airline: 'AA',
//     passengers: []
//   });
//   flight1.save();

//   var airport1 = airports;
//   var terminal1 = new Terminal ({
//     name: 'Termina 1',
//     flights: [flight1],
//     capacity: 234324
//   })
//   terminal1.save();
//   terminal1.flights.push(flight1);
//   console.log(terminal1);

//   airport1.terminals.push(terminal1);
//   console.log(airport1);
// });

// var terminal1 = Terminal.find({}, function (err, terminals) {
//   console.log(terminals);
// });

