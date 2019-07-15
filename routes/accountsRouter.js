const express = require('express');
const Accounts = require("../data/helpers/accountsModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("/api/accounts/get")
});

router.get("/:id", (req, res) => {
  res.json("/api/accounts/get/:id")
});

router.post("/", async (req, res, next) => {
  const { name, budget, } = req.body;

  try {
    const status = await Accounts.insert({name, budget});

    res.status(201).json(status);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res) => {
  res.json("/api/accounts/put")
});

router.delete("/:id", (req, res) => {
  res.json("/api/accounts/del")
});

module.exports = router;