const { Pool, Client } = require('pg');
const connectionString = `postgresql://postgres:postgres@localhost:5432/omniportal`;

const client = new Client(connectionString);
client.connect();

module.exports = client;
