const knex = require('knex');

const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/budget.db3"
  },
  useNullAsDefault: true
})

module.exports = db;