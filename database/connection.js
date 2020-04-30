const { Client } = require('pg');

const postgresClient = new Client({
    database: 'houses_database',
    port: '5432',
});

postgresClient.connect()

module.exports = postgresClient;
