'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel');


router.get('/users/register', (req, res) => {
    res.render('template', {
        locals: {
            title: 'New User Registration',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/register'
        }
    });
})

router.get('/users/login', (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Login',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partials/login'
        }
    });
})

router.post('/users/register', async(req, res) => {
    const { first_name, last_name, user_name, password } = req.body;

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    const response = await UserModel.createNewUser(first_name, last_name, user_name, hash);

    if (response.id) {
        res.redirect('/users/login');
    } else {
        res.status(500).send("ERROR: Please try submitting the form again.");
    }
});

router.post('/users/login', async(req, res) => {
    const { user_name, password } = req.body;
    const user = new UserModel(null, null, null, user_name, password);
    const response = await user.login();

    if (!!response.isValid) {
        const { isValid, user_id, user_name } = response;

        req.session.is_logged_in = isValid;
        req.session.user_id = user_id;
        req.session.username = user_name;

        res.redirect('/tripList');
    } else {
        res.sendStatus(403);
    }
});

router.get('/users/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

module.exports = router;