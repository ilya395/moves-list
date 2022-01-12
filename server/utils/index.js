const crypto = require("crypto");

function hash(text) {
  return crypto
    .createHash('sha1')
    .update(text)
    .digest('base64')
}

module.exports = hash;