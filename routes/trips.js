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


router.get('/trips_history', (req, res) => {
    const user_id = req.session.user_id;
    const trips = new tripsModel();
        tripsData = await trips.getTripByUser(user_id);
    
    res.render('template', {
        locals: {
            title: "Trip History",
            trip: tripsData,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/trips_history'
        }
    });
});

module.exports = router;