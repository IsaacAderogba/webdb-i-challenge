const express = require("express"); // import express
// const accountsRouter = require('./routes/accountsRouter');

const db = require("./data/dbConfig.js"); // pull data
const server = express(); // use express

server.use(express.json()); // use json

server.get("/", (req, res, next) => {
  next(new Error('Error'));
  res.send(`<h2>WebDB I Challenge</h2>`);
});

// Error handling middleware
server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server; // export server
