const registerRouter = require('./registerRoute');
const costumerRoute = require('./costumerRoute');
const loginRoute = require('./loginRoute');
const checkoutRoute = require('./checkoutRoute');

module.exports = [
  registerRouter,
  loginRoute,
  costumerRoute,
  checkoutRoute,
];
