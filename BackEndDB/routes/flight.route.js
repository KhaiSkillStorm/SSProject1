const router = require('express').Router();
const {createFlight,findAllFlights,findFlightById,deleteAFlight,updateAFlight,deleteFlightByName,findFlightByName, updateAFlightByName} = require('../controllers/flight.controller');
// router for commands using flight



router.get('/', async (req,res) => {
    const flights = await findAllFlights();
    res.json(flights);
});

router.get('/byid/:id',async (req,res) => {
    try {
        const flight = await findFlightById(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

router.get('/byfn/:flightName',async (req,res) => {
    try {
        const flight = await findFlightByName(req.params.flightName);
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

router.delete('/delete/id/:id',async (req,res) => {
    try {

        const flight = await deleteAFlight(req.params.id);
        console.log(`hi`);
        res.json(flight);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
});

router.delete('/delete/fn/:flightNumber2',async (req,res) => {
    try {
        const flight = await deleteFlightByName(req.params.flightNumber2);
        res.json(flight);
    } catch(err) {
        res.status(err?.status || 400).json(err);
    }
});
router.put('/update/id/:id',async (req,res) => {
    try {
        const flight = await updateAFlight(req.params.id,req.body);
        res.status(201).json(flight);
    } catch(err)
    {
        console.log('Were not able to update');
        res.status(err?.status || 400).json(err);
    }
});
router.put('/update/fn/:name',async (req,res) => {
    try {
        const flight = await updateAFlightByName(req.params.name,req.body);
        res.status(201).json(flight);
    } catch(err)
    {
        console.log('Were not able to update');
        res.status(err?.status || 400).json(err);
    }
});

module.exports = router;