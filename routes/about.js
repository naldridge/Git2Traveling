'use strict'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    res.render('template', {
        locals: {
            title: "About Us",
            is_logged_in: req.session.is_logged_in

        },
        partials: {
            body: 'partials/aboutus'
        }
    });
});



module.exports = router;