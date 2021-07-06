'use strict'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    res.render('template', {
        locals: {
            title: "Git2Traveling",
            is_logged_in: req.session.is_logged_in

        },
        partials: {
            body: 'partials/home'
        }
    });
});



module.exports = router;