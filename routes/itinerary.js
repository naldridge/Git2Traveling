'use strict'

const express = require('express');
const router = express.Router();
const tripsModel = require('../models/tripsModel');
const itineraryModel = require('../models/itineraryModel');
const { response } = require('express');


router.get('/:trip_id', async (req, res) => {
    const trip_id = req.params.trip_id;
    const user_id = req.session.user_id;
    const trip_build = await itineraryModel.getItineraryByTrip(trip_id);

    res.render('template', {
        locals: {
            title: "Plan Your Trip",
            trip: trip_build,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: 'partials/itinerary'
        }
    });
});

router.post('/add_itinerary', (req, res) => {
    const { day, destination, leisure, dining, transport, budget, trip_id } = req.body;
    const itinerary = new itineraryModel(null, day, destination, leisure, dining, transport, budget, trip_id);
    const response = itinerary.addItinerary(day, destination, leisure, dining, transport, budget, trip_id);
    if (!!response.id) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;