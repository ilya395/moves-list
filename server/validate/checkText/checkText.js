const { BAD_WORDS } = require("../../constants");

function checkText (str) {
  if (!str && str != "") {
    return false;
  }
  let validate = true;
  for (let j = 0; j < BAD_WORDS.length; j++) {
    if (str.indexOf(BAD_WORDS[j]) !== -1) {
        validate = false;
        break;
    }
  }
  return validate;
}

module.exports = checkText;