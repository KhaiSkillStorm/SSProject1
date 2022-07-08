import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FlightCreate.css';
import planecreation from './planecreation.jpg';
export const FlightCreate = () => {
    const flightNumber = useRef();
    const departureDate = useRef();
    const arrivalDate = useRef();
    const departureTime = useRef();
    const arrivalTime = useRef();
    const departureAirport = useRef();
    const arrivalAirport = useRef();
    const passengerLimit = useRef();
    const currentNumPassengers = useRef();
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (currentNumPassengers.current.value > passengerLimit.current.value){
                alert("exceeded capacity");
                currentNumPassengers.current.value = null;
                passengerLimit.current.value = null;
            } else{ 
            await axios.post('http://localhost:8089/flights', 
                            { flightNumber: flightNumber.current.value, departureDate: departureDate.current.value, arrivalDate: arrivalDate.current.value, departureTime: departureTime.current.value, arrivalTime: arrivalTime.current.value , departureAirport: departureAirport.current.value, arrivalAirport: arrivalAirport.current.value, passengerLimit: passengerLimit.current.value, currentNumPassengers: currentNumPassengers.current.value});
            navigate('/flights', {replace: true});
            }
        } catch (error) {
            alert("Flight ID already exists!");
            console.log('Something Went Wrong');
        }
    }
            return (
                <div class="creation"> 
                <center>
                {/* <img src={planecreation} alt="flightbuild scene" width={1000}></img> */}
                <form className="MyForm" onSubmit={handleSubmit}>
                        <label htmlFor="flightNumber">Flight Number:</label>
                            <div>
                                <input id="flightNumber" type="text" placeholder="First Name" ref={flightNumber} required/>
                            </div>
                            <label htmlFor="departureDate">Departure Date:</label>
                            <div>
                                <input id="departureDate" type="date" placeholder="Departure Date" ref={departureDate} required />
                            </div>
                            <label htmlFor="arrivalDate">Arrival Date:</label>
                            <div>
                                <input id="arrivalDate" type="date" placeholder="Arrival Date" ref={arrivalDate} required/>
                            </div>
                            <label htmlFor="departureTime">Departure Time:</label>
                            <div>
                                <input id="departureTime" type="time" placeholder="Departure Time" ref={departureTime} required />
                            </div>
                            <label htmlFor="arrivalTime">Arrival Time:</label>
                            <div>
                                <input id="arrivalTime" type="time" placeholder="Arrival Time" ref={arrivalTime} required/>
                            </div>
                            <label htmlFor="departureAirport">Departure Airport:</label>
                            <div>
                                <input id="departureAirport" type="text" placeholder="Departure Airport" ref={departureAirport} required/>
                            </div>
                            <label htmlFor="arrivalAirport">Arrival Airport:</label>
                            <div>
                                <input id="arrivalAirport" type="text" placeholder="Arrival Airport" ref={arrivalAirport} required/>
                            </div>
                            <label htmlFor="passengerLimit">Passenger Limit:</label>
                            <div>
                                <input id="passengerLimit" type="number" placeholder="Passenger Limit" ref={passengerLimit} required step="1" />
                            </div>
                            <label htmlFor="currentNumPassengers">Current Number Of Passengers:</label>
                            <div>
                                <input id="currentNumPassengers" type="number" placeholder="current number of passengers" ref={currentNumPassengers} required step="1" />
                            </div>
                            <input type="submit" value="Add Flight" />
                </form>
                </center>
            </div>
            );
}