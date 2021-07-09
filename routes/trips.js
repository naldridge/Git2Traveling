'use strict'

const express = require('express');
const router = express.Router();
const tripsModel = require('../models/tripsModel');
const itineraryModel = require('../models/itineraryModel');

router.get('/trips_history', async (req, res) => {
    const user_id = req.session.user_id;
    const tripsList = await tripsModel.getTripByUser(user_id);
    const trip_itinerary = await itineraryModel.getItineraryByTrip(trip_id);
    //console.log("tripsList: ", tripsList);
    
    res.render('template', {
        locals: {
            title: "Trip History",
            trip: tripsList,
            itinerary: trip_itinerary,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: 'partials/trips_history'
        }
    });
});

router.post('/add_trip',  (req, res) => {
    const { location, trip_name, trip_start_date, trip_end_date, user_id } = req.body;
    const trip = new tripsModel(null, location, trip_name, trip_start_date, trip_end_date, user_id);
    const response = trip.addTrip();
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;