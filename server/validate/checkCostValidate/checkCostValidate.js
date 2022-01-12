const checkNumbers = require("../checkNumbers/checkNumbers.validate");
const checkText = require("../checkText/checkText");
const checkDate = require("../checkDate/checkDate");

function checkCostValidate ({keys, data}) {
  let status = true;

  for (let key in data) {
    if (keys.indexOf(key) != -1) { // есть ключ в массиве ключей
      if (key == "id" && !checkNumbers(data[key])) {
        status = false;
      }
      if (key == "amount" && !checkNumbers(data[key])) {
        status = false;
      }
      if (key == "description") {
        if (!checkText(data[key])) {
          status = false;
        }
      }
      if (key == "userId" && !checkNumbers(data[key])) {
        status = false;
      }
      if (key == "date" && !checkDate(data[key])) {
        status = false;
      }
      if (key == "expenseItemId" && !checkNumbers(data[key])) {
        status = false;
      }
    }
  }

  return status;
}

module.exports = checkCostValidate;