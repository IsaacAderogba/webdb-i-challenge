const db = require('../dbConfig');

module.exports = {
  get: function() {
    console.log('Called');
  },
  insert: function({name, budget}) {
    console.log('executed');
    return db("accounts").insert({name, budget});
  }
}