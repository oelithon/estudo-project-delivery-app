const goodResponse = (status, json) => ({ status, json });
const errorResponse = (status, json) => ({ status, json });

module.exports = {
  goodResponse,
  errorResponse,
};
