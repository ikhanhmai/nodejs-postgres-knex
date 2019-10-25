const knex = require('knex');

const database = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'admin',
    password: 'iii3studi1',
    database: 'simple_api'
  }
});

module.exports = database;
