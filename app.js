'use strict';

const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;

const express = require('express');
const session = require('express-session');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(
    session({
        secret: 'Safe Travels!',
        resave: false,
        saveUninitialized: false,
        is_logged_in: false
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const userController = require('./routes/users');
const tripsController = require('./routes/trips');
const aboutController = require('./routes/about');

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(404);
})

app.use('/', rootController);
app.use('/', userController);
app.use('/', tripsController);
app.use('/', aboutController);