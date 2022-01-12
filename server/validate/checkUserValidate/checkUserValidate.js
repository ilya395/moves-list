const checkNumbers = require("../checkNumbers/checkNumbers.validate");
const checkText = require("../checkText/checkText");
const checkPhoneNum = require("../checkPhone/checkPhone");
const checkEmail = require("../checkEmail/checkEmail");
const checkPassword = require("../checkPassword/checkPassword");
const checkName = require("../checkName/checkName");

function checkUserValidate({keys, data}) {
  let status = true;

  for (let key in data) {
    if (keys.indexOf(key) != -1) { // есть ключ в массиве ключей
      if (key == "id" && !checkNumbers(data[key])) {
        status = false;
      }
      if (key == "login" && !checkName(data[key])) {
        status = false;
      }
      if (key == "password" && !checkPassword(data[key])) {
        status = false;
      }
      if (key == "email" && !checkEmail(data[key])) {
        status = false;
      }
      if (key == "phone" && !checkPhoneNum(data[key])) {
        status = false;
      }
      if (key == "shortName" && !checkText(data[key])) {
        status = false;
      }
      if (key == "surname" && !checkText(data[key])) {
        status = false;
      }
    }
  }

  return status;
}

module.exports = checkUserValidate;