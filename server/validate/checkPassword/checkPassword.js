const validator = require("validator");

function checkPassword(str, min = 5, max = 32) {
  return str && validator.isLength(str, min, max) && /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{6,}/.test(str);
};

module.exports = checkPassword;