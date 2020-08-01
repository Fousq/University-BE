const client = require('./dao')

'use strict'

/**
 * Service class to authenticate the users
 */
class UserService {

    constructor() {
        this.query = {
            findOneByUsernameAndPassword: `SELECT id, username, password FROM user_account 
            WHERE username = $1 and password = $2`
        }
    }

    /**
     * Find a user from db by username and password
     * @param {*} username 
     * @param {*} password 
     */
    findUserByUsernameAndPassword(username, password) {
        return client.query(this.query.findOneByUsernameAndPassword, [username, password])
        .then(res => new Promise((resolve, reject) => {
            const user = res.rows[0];
            if (user.isEmpty()) {
                reject({ msg : 'No user found' });
            }
            resolve(user);
        })).catch(error => Promise.reject({ msg: error.message }));
    }
}

module.exports = UserService