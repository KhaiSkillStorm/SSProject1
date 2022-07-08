import { useEffect, useState } from 'react';
import axios from 'axios';
import './FlightList.css';
export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    // As soon as the component loads, we fetch all movies
    useEffect(() => {
        axios.get('http://localhost:8089/flights')
            .then(res => setFlights(res.data));
    }, []);


    return (
        <body>
        <div class="flights">
            {/* Transform the flights array into an array of JSX elements */}
            {flights.map((flight, index) => {
                // For our keys, we should use some unique property for the key value
                // Using index is a last resort if you have nothing else to use
                // Unique ids should be used ONLY if the id was created at time of data creation (It won't change)
                return (
                    <div class = "flight" key={flight._id}><center>
                        <div><strong>{flight.flightNumber}</strong></div>
                        <div><strong>departure | arrival</strong></div>
                        <div><strong>{flight.departureDate.split('T',1)} | {flight.arrivalDate.split('T',1)}</strong></div>
                        <div><strong>{flight.departureTime} | {flight.arrivalTime}</strong></div>
                        <div><strong>{flight.departureAirport} | {flight.arrivalAirport}</strong></div>
                        <div><strong>Space: {flight.currentNumPassengers} / {flight.passengerLimit}</strong></div></center>
                    </div>
                );
            })}
        </div>
        </body>
    );
}