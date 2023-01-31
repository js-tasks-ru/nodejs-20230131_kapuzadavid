const _ = require('lodash');

function sum(a, b) {
  if (_.isInteger(a) && _.isInteger(b)) {
    return a + b;
  } else {
    throw new TypeError();
  }
}

module.exports = sum;
