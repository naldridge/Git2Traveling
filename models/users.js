'use strict';

const db = require('./conn');
const bcrypt = require('bcryptjs');

class UserModel {
    constructor(id, first_name, last_name, username, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM users;`
            )
            return response;
        } catch (error) {
            console.error("Error: ", error);
            return error;
        }
    }
    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword)
    }

    static async createNewUser(first_name, last_name, username, password) {
        try {
            const query = `INSERT INTO users (first_name, last_name, username, password)
            VALUES
                ('${first_name}', '${last_name}', '${username}', '${password}')
            RETURNING id;`;
            const response = await db.one(query);
            console.log("New User Response: ", response);
            return response;
        } catch (error) {
            console.error("Error: ", error);
            return error;
        }
    }

    async login() {
        try {
            // lookup user by email
            const query = `SELECT * FROM users WHERE username = '${this.username}';`;
            const response = await db.one(query);
            // check user's password based on hash
            const isValid = this.checkPassword(response.password);
            // return response to the controller, either valid or invalid
            if (!!isValid) {
                const { id, username} = response;
                return {isValid, user_id: id, username}
            } else {
                return { isValid }
            }
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}


module.exports = UserModel;