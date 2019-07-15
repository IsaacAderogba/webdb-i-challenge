const express = require('express');
const Accounts = require("../data/helpers/accountsModel");

const router = express.Router();

router.get("/", (req, res) => {
  Accounts.get();
  res.json("/api/accounts/get")
});

router.get("/:id", (req, res) => {
  res.json("/api/accounts/get/:id")
});

router.post("/", (req, res) => {
  res.json("/api/accounts/post")
});

router.put("/:id", (req, res) => {
  res.json("/api/accounts/put")
});

router.delete("/:id", (req, res) => {
  res.json("/api/accounts/del")
});

module.exports = router;