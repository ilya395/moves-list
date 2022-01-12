const  checkNumbers = require("../checkNumbers/checkNumbers.validate");
const  checkDate = require("../checkDate/checkDate");

function checkCollectionValidate({keys, data}) {
  let status = true;

  for (let key in data) {
    if (keys.indexOf(key) != -1) { // есть ключ в массиве ключей
      if (key == "date" && !checkDate(data[key])) {
        status = false;
      }
      if (key == "userId" && !checkNumbers(data[key])) {
        status = false;
      }
    }
  }

  return status;
}

module.exports = checkCollectionValidate;