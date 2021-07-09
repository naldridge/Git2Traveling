'use strict'

const express = require('express');
const router = express.Router();
const tripsModel = require('../models/tripsModel');
const itineraryModel = require('../models/itineraryModel');

router.get('/trips_plan', (req, res) => {
    res.render('template', {
        locals: {
            title: "Trip Planner",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/trips_plan'
        }
    });
});

router.post('/add_itinerary', (req, res) => {
    const { day, destination, leisure, dining, transport, budget, trip_id } = req.body;
    const itinerary = new itineraryModel(null, day, destination, leisure, dining, transport, budget, trip_id);
    const response = itinerary.addItinerary();
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;