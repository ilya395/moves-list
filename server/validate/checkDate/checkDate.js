const checkNumbers = require("../checkNumbers/checkNumbers.validate");

function checkDate(date) {
  const newDate = new Date(date);
  return date && newDate;
}

module.exports = checkDate;