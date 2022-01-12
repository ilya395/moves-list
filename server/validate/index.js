const checkEmail = require("./checkEmail/checkEmail");
const checkName = require("./checkName/checkName");
const checkNumbers = require("./checkNumbers/checkNumbers.validate");
const checkPassword = require("./checkPassword/checkPassword");
const checkPhoneNum = require("./checkPhone/checkPhone");
const checkCostValidate = require("./checkCostValidate/checkCostValidate");
const checkText = require("./checkText/checkText");
const checkDate = require("./checkDate/checkDate");
const checkCollectionValidate = require("./checkCollectionValidate/checkCollectionValidate");
const checkUserValidate = require("./checkUserValidate/checkUserValidate");

module.exports = {
  checkEmail,
  checkName,
  checkNumbers,
  checkPassword,
  checkPhoneNum,
  checkCostValidate,
  checkText,
  checkDate,
  checkCollectionValidate,
  checkUserValidate,
}