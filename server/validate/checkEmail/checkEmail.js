const validator = require("validator");

function checkEmail(str) {
  return str && validator.isEmail(str);
}

module.exports = checkEmail;