const server = require('./server.js'); // import server

const PORT = process.env.PORT || 4000; // use production port or local port

server.listen(PORT, () => { // start server
  console.log(`Listening on port ${PORT}...`);
});