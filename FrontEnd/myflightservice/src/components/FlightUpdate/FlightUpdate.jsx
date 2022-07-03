import { useEffect, useState } from 'react';
import axios from 'axios';
// https://www.mattmorgante.com/technology/dropdown-with-react
export const FlightUpdate = () => {

    const [flights, setFlights] = useState([]);

    // As soon as the component loads, we fetch all movies
    useEffect(() => {
        axios.get('http://localhost:8089/flights')
            .then(res => setFlights(res.data));
    }, []);

    let optionFlights = flights.map((flight) =>
        <option key={flight.name}>{flight.name}</option>
    );
    return (
        
        <>
        <h1> Update Form is currently being worked on</h1>
            <div> {flights.map} </div>
        </>
    )
}