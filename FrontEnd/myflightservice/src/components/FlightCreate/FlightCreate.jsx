import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FlightCreate.css';

export const FlightCreate = () => {

    
    const navigate = useNavigate();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         await axios.post('http://localhost:8089/flights', 
    //                         { firstName: firstNameRef.current.value, lastName: lastNameRef.current.value });
    //         navigate('../', {replace: true});
    //     } catch (error) {
    //         console.log('Something Went Wrong');
    //     }
    // }
            return (
                <>
                {/* <form className="MyForm" onSubmit={handleSubmit} >
                    <label htmlFor="firstName">First Name:</label>
                    <div>
                        <input id="firstName" type="text" placeholder="First Name" ref={firstNameRef} />
                    </div>
    
                    <label htmlFor="lastName">Last Name:</label>
                    <div>
                        <input id="lastName" type="text" placeholder="Last Name" ref={lastNameRef} />
                    </div>
    
                    <input type="submit" value="Add Actor" />
                </form> */}
                <h1> Create Form is currently being made to handle flight creation</h1>
            </>
            );
}