const express = require('express');
const Accounts = require("../data/helpers/accountsModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("/api/accounts/get")
});

router.get("/:id", async (req, res, next) => {
  try {
    const account = await Accounts.getAccountById(req.params.id)
    res.status(200).json(account[0]);
  } catch(err) {
    next(err);
  }
  
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