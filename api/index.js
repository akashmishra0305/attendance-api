const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Ensure db.json is in the root directory
const middlewares = jsonServer.defaults();

// Use middlewares and router for mock API
server.use(middlewares);
server.use(router);

// Export the handler for Vercel to use
module.exports = (req, res) => {
  server(req, res);
};