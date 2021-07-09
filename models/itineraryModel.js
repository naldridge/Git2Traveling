'use strict';

const { response } = require('express');
const db = require('./conn');

class itineraryModel {
    constructor(id, day, destination, leisure, dining, transport, budget, trip_id) {
        this.id = id;
        this.day = day;
        this.destination = destination;
        this.leisure = leisure;
        this.dining = dining;
        this.transport = transport;
        this.budget = budget;
        this.trip_id = trip_id;
    }

    static async getItineraryByTrip(trip_id) {
        try {
            const response = await db.any(
                `SELECT * FROM itinerary WHERE trip_id = ${trip_id};`
            ) 
            return response;
        } catch (err) {
            console.error("Error: ", err);
            return err.message;
        }
    }
    static async addItinerary() {
        try {
            const query = `INSERT INTO itinerary (day, destination, leisure, dining, transport, budget, trip_id) VALUES (${this.day}, '${this.destination}', '${this.leisure}', '${this.dining}', '${this.transport}', ${this.budget}, ${this.trip_id})`;
            const response = await db.result(query);
            return response;
        } catch (err) {
            console.error("Error: ", err);
            return err.message;
        }
    }
}

module.exports = itineraryModel;