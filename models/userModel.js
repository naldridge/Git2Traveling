'use strict';

const db = require('./conn');
const bcrypt = require('bcryptjs');

class UserModel {
    constructor(id, first_name, last_name, user_name, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.user_name = user_name;
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

    static async createNewUser(first_name, last_name, user_name, password) {
        try {
            const query = `INSERT INTO users (first_name, last_name, user_name, password)
            VALUES
                ('${first_name}', '${last_name}', '${user_name}', '${password}')
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
            // lookup user by username
            const query = `SELECT * FROM users WHERE user_name = '${this.user_name}';`;
            const response = await db.one(query);
            // check user's password based on hash
            const isValid = this.checkPassword(response.password);
            // return response to the controller, either valid or invalid
            if (!!isValid) {
                const { id, user_name} = response;
                return {isValid, user_id: id, user_name}
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