'use strict';

const db = require('./conn');


class tripsModel {
    constructor(id, location, trip_name, trip_date, user_id) {
        this.id = id;
        this.location = location;
        this.trip_name = trip_name;
        this.trip_date = trip_date;
        this.user_id = user_id;
    }

    static async getTripbyUser() {
        try {
            const response = await db.any(
                `SELECT * FROM trips WHERE user_id = ${this.user_id};`
            )
                return response;
        } catch (err) {
            console.error("Error: ", err);
            return err;
        }
    }

    static async addTrip() {
        try {
            const query = `INSERT INTO trips (location, trip_name, trip_date, user_id) VALUES ('${this.location}', '${this.trip_name}', ${trip_date}, ${user_id})`;
            const response = await db.result(query);
            return response;
        } catch (err) {
            console.error("Error: ", err);
            return err;
        }
    }
}





module.exports = tripsModel;