'use strict'

const express = require('express');
const router = express.Router();

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
    res.render('template', {
        locals: {
            title: "Trip History",
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/trips_history'
        }
    });
});

module.exports = router;