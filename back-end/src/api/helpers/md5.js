const md5 = require('md5');

const encryptPassword = (password) => md5(password);

// const comparePassword = (encrypted, password) => {
//   const isEqual = encrypted === md5(password);
//   return isEqual;
// };

module.exports = {
  encryptPassword,
  // comparePassword,
};
