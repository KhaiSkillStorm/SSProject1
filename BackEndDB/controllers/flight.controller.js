const { deleteOne } = require('../models/Flight.model');
const Flight = require('../models/Flight.model');

const createFlight = async ({flightNumber,departureDate,arrivalDate,departureTime,arrivalTime,departureAirport,arrivalAirport,passengerLimit,currentNumPassengers}) => {

        try {
            const flight = new Flight({
                flightNumber,
                departureDate,
                arrivalDate,
                departureTime,
                arrivalTime,
                departureAirport,
                arrivalAirport,
                passengerLimit,
                currentNumPassengers
            }); //creates flight object with flight model
            await flight.save(); //saves to database

                return flight._id; // returns the id of the newly created flight
        } catch (err) {
            console.error(err);
            throw {status: 404, message: err};
        }
}

const findFlightById = async id => {
    try {
             // If no movie is found, this does NOT return a rejected promise. Instead null is returned
             const flight = await Flight.findById(id);
             if(flight == null) { // if id doesn't exist
                throw `No Flight with the id of ${id} was found, please go back and try again.`;
             }
             return flight; //returns the flight that was found by the id
    } catch (err) {
        console.error(err);
        throw {status:404, message:err}; // basically rejecting a promise
    }
}
const findFlightByName = async flightName => {
    try {
             // If no movie is found, this does NOT return a rejected promise. Instead null is returned
             var flight = await Flight.findOne({ flightNumber: flightName});
             if(flight == null) { // if id doesn't exist
                throw `No Flight with the name of ${flightName} was found, please go back and try again.`;
             }
             const flightid = flight._id; 
             return flightid; //returns the flight that was found by the id
    } catch (err) {
        console.error(err);
        throw {status:404, message:err}; // basically rejecting a promise
    }
}

const findAllFlights = async (limit=0) => {
    const flights = await Flight.find(); // Get all flights
    return flights;
}

const deleteAFlight = async id => {
    try {
        const flight = await Flight.findByIdAndDelete(id);
        if(flight == null) { // if id doesn't exist
           throw `No Flight with the id of ${id} was found to be deleted, please go back and try again.`;
        }
            return `Flight with ${id} has been found and deleted`;

    } catch(err){
        console.error(err);
        throw {status:404, message:err};
    };
    
}

const deleteFlightByName = async flightNumber2 => {
    try{
    const flight2 = await findFlightByName(flightNumber2);
   const flight3 =  await deleteAFlight(flight2);
    // deleteAFlight(flightid);
    // const flight = await Flight.findOneAndDelete({flightNumber:fNum});
    if(flight3 == null) {
        throw `No flight with the flightNumber ${flightNumber2} was found to be deleted, please go back and try again`;
    } 
    return flight3;
} catch(err) {
    console.error(err);
    throw {status: 404, message:err};
};
}


const updateAFlight = async (id,updatedFlight) =>{
    try{
       const newflight= await Flight.findByIdAndUpdate(id,updatedFlight,{new:true});
        if (newflight == null){ // if no flight found, advise to create one
            throw `The flight id ${ id } does not exist, please create it first!`
        }
        return newflight; // return results
    } catch (err){
        console.error(err);
        throw { status: 404, message: err };
    }
}
const updateAFlightByName = async (name,updatedFlight) =>{
    try{
       const newflight= await findFlightByName(name);
       const newflight2 = await updateAFlight(newflight,updatedFlight);
        if (newflight2 == null){ // if no flight found, advise to create one
            throw `The flight with the name of ${ name } does not exist, please create it first!`
        }
        return newflight2; // return results
    } catch (err){
        console.error(err);
        throw { status: 404, message: err };
    }
}
module.exports = {createFlight, findAllFlights, findFlightById, deleteAFlight,updateAFlight,deleteFlightByName,findFlightByName,updateAFlightByName};