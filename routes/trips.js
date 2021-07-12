'use strict'

const express = require('express');
const router = express.Router();
const tripsModel = require('../models/tripsModel');
const itineraryModel = require('../models/itineraryModel');


router.get('/history', async (req, res) => {

router.get('/trips_history', async(req, res) => {

    const user_id = req.session.user_id;

    //const trips = new tripsModel();
    const trips_history = await tripsModel.getTripByUser(user_id);
    console.log("trips_history: ", trips_history);

    res.render('template', {
        locals: {
            title: "Trip History",
            trip: trips_history,

            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: 'partials/trips_history'
        }
    });
});


router.get('/plan', async (req, res) => {
    //const tripsList = await tripsModel.getTripByUser(user_id);


    res.render('template', {
        locals: {
            title: "Trip Planner",
            //trip: , 
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
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

router.post('/add_trip', async (req, res) => {


router.post('/add_trip',  (req, res) => {

    const { location, trip_name, trip_start_date, trip_end_date, user_id } = req.body;
    const trip = new tripsModel(null, location, trip_name, trip_start_date, trip_end_date, user_id);
    const response = await trip.addTrip();
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;