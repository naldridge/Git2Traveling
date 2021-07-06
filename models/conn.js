<<<<<<< HEAD
'use strict';

=======
>>>>>>> main
require('dotenv').config();

const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const pgp = require('pg-promise')({
    query: function (event) {
<<<<<<< HEAD
        console.log("QUERY: ", event.query);
    }
});

const options = {
=======
        console.log('QUERY: ', event.query)
    }
});

const options =  {
>>>>>>> main
    host,
    database,
    user,
    password
<<<<<<< HEAD
};
=======
}
>>>>>>> main

const db = pgp(options);

module.exports = db;