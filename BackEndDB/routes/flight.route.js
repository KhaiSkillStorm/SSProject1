const router = require('express').Router();
const {createFlight,findAllFlights,findFlightById} = require('../controllers/flight.controller');
// router for commands using flight



router.get('/', async (req,res) => {
    const flights = await findAllFlights();
    res.json(flights);
});

router.get('/:id',async (req,res) => {
    try {
        const flight = await findFlightById(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

router.post('/',async (req,res) => {
    try {
        const flightId = await createFlight(req.body);
        res.status(201).json({_id: flightId});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

module.exports = router;