const express = require("express");
const Accounts = require("../data/helpers/accountsModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("/api/accounts/get");
});

router.get("/:id", validateId, async (req, res, next) => {
  try {
    res.status(200).json(req.account);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { name, budget } = req.body;

  try {
    const createdAccount = await Accounts.insert({ name, budget });

    res.status(201).json(createdAccount);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", validateId, (req, res) => {
  res.json("/api/accounts/put");
});

router.delete("/:id", validateId, (req, res) => {
  res.json("/api/accounts/del");
});

// validateID middleware
async function validateId(req, res, next) {
  const { id } = req.params;
  if (Number.isInteger(parseInt(id, 10))) {
    try {
      const account = await Accounts.getAccountById(id);
      if (account) {
        req.account = account;
        next();
      } else {
        res
          .status(404)
          .json({ message: `The account with Id of '${id}' does not exist` });
      }
    } catch (err) {
      next(err);
    }
  } else {
    res.status(400).json({ message: `The Id of '${id}' is not valid` });
  }
}

// validateBody middleware

module.exports = router;
