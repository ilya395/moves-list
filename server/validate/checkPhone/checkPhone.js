const validator = require("validator");

function checkPhoneNum(str) {
  return str && validator.isNumeric(str.toString());
  // return str && validator.isMobilePhone(str.toString(), 'ru-RU');
 };

 module.exports = checkPhoneNum;