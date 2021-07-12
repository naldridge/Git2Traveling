'use strict';

const db = require('./conn');


class tripsModel {
    constructor(id, location, trip_name, trip_start_date, trip_end_date, user_id) {
        this.id = id;
        this.location = location;
        this.trip_name = trip_name;
        this.trip_start_date = trip_start_date;
        this.trip_end_date = trip_end_date;
        this.user_id = user_id;
    }

    static async getTripByUser(user_id) {
        try {
            const response = await db.any(
                `SELECT * FROM trips WHERE user_id = ${user_id};`)
                return response;
        } catch (err) {
            console.error("Error: ", err);
            return err.message;
        }
    }

    static async addTrip() {
        try {
            const query = `INSERT INTO trips (location, trip_name, trip_start_date, trip_end_date, user_id) VALUES ('${this.location}', '${this.trip_name}', ${this.trip_start_date}, ${this.trip_end_date}, ${this.user_id})`;
            const response = await db.result(query);
            console.log("RESPONSE: ", response);
            return response;
        } catch (err) {
            console.error("Error: ", err);
            return err.message;
        }
    }
}





module.exports = tripsModel;