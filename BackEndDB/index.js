const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
require('dotenv').config(); // One and done so I don't need the value from require
const cors = require('cors'); // Cross Origin Resource Sharing

const app = express();
const PORT = process.env.PORT || 8080; // Default to 8080 if not in .env
app.use(express.json()); // This is middleware that auto parses JSON into JS objects between each HTTP request and the endpoint
app.use(cors()); // Allow all traffic
app.use(logger); // uses the middleware logger

const flightRouter = require('./routes/flight.route.js');
app.use('/flights',flightRouter);


app.all('*', (req, res) => {
    console.log('Request received'); // This just prints on the server side

    // I can chain and continuosly build out my response object using the builder design pattern
    res.status(404).type('.html').send('<b>This is not the page you are looking for</b>');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    .catch(err => {
        console.error(err);
        // Options
        // Connect to fallback database
        // OR
        // Terminate process
        process.exit(1);
    });


// runs the server on the following port
app.listen(PORT, () => {
    // This callback will run once my server starts listening
    console.log(`Server is up and running successfully on port ${PORT}`);
});