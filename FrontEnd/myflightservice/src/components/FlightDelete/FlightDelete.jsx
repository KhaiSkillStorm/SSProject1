import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
export const FlightDelete = () => {
    const flightNumber = useRef();
    const navigate = useNavigate();
    const handleDelete = async (event) => {
        event.preventDefault();
        const fn = flightNumber.current.value;
        try {
            await axios.delete('http://localhost:8089/flights/delete/fn/'+ fn);
            alert("Flight Successfully deleted!!")
            navigate('../', {replace: true});
        } catch (error) {
            alert("Flight does not exist, try again!")
            console.log('Something Went Wrong');
        }
    }

    return (
        <>
        <h1> Deletion form is currently being added into front end</h1>
        <center>
                <form className="MyForm" onSubmit={handleDelete}>
                        <label htmlFor="flightNumber">Flight Number:</label>
                            <div>
                                <input id="flightNumber" type="text" placeholder="First Name" ref={flightNumber} required/>
                            </div>
                            <input type="submit" value="Delete Flight" />
                </form>
                </center>
        </>

    );
}