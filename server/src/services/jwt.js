var jwtSimple = require("jwt-simple");

function generateToken(payload) {
  return jwtSimple.encode(payload, 'secret');
};

module.exports = {
  generateToken
}