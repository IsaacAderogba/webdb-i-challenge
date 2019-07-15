const db = require("../dbConfig");

module.exports = {
  get: function() {
    console.log("Called");
  },
  getAccountById: function(id) {
    return db("accounts").where({ id }).first();
  },
  insert: function({ name, budget }) {
    return db("accounts")
      .insert({ name, budget })
      .then(([id]) => this.getAccountById(id));
  }
};
