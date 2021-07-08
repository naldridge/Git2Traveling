
'use strict'

const express = require('express');
const router = express.Router();
const tripsModel = require('../models/tripsModel');

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


router.get('/trips_history', async (req, res) => {
    const user_id = req.session.user_id;
    //const trips = new tripsModel();
    const tripsList = await tripsModel.getTripByUser(user_id);
    console.log("tripsList: ", tripsList);
    
    res.render('template', {
        locals: {
            title: "Trip History",
            trip: tripsList,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: 'partials/trips_history'
        }
    });
});

router.post('/',  (req, res) => {
    const { location, trip_name, trip_date, user_id } = req.body;
    const trip = new tripsModel(null, location, trip_name, trip_date, user_id);
    const response = trip.addTrip();
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;