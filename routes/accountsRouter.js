const express = require('express');
const Accounts = require("../data/helpers/accountsModel");

const router = express.Router();

router.get("/", (req, res) => {
  Accounts.get();
  res.json("/api/accounts/get")
});

module.exports = router;