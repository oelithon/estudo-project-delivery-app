const registerRouter = require('./registerRoute');
const costumerRoute = require('./costumerRoute');
const loginRoute = require('./loginRoute');
const checkoutRoute = require('./checkoutRoute');
const usersRoute = require('./usersRoute');

module.exports = [
  registerRouter,
  loginRoute,
  costumerRoute,
  checkoutRoute,
  usersRoute,
];
