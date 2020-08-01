const { Pool } = require('pg');
const config = require('config').get('db')

const pool = new Pool({
    user: config.username,
    host: config.host,
    database: config.database,
    port: config.port,
    password: config.password
});

module.exports = {
    query: (query, params) => {
        return pool.query(query, params);
    }
}