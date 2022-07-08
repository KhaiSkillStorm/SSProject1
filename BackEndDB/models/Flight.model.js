//Schema for flights
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Flight Schema

const flightSchema = new Schema({

    flightNumber :{
    type:String,
    unique:true    
    },
    departureDate: Date,
    arrivalDate: Date,
    departureTime: String,
    arrivalTime: String,
    departureAirport: String,
    arrivalAirport: String,
    passengerLimit: Number,
    currentNumPassengers: {
        type: Number,
        min: [0,'can not have lower than 0 passengers']
    }
    
});

const Flight = mongoose.model('Flight',flightSchema,'Flights');
module.exports = Flight;