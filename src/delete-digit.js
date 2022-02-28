const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let count = 0,
      num = [];
  while (n) {
    num.push(n % 10);
    n = Math.floor(n / 10);  }
  for (let j = 0; j < num.length; j++) {
    let n = 0;
    for (let i = num.length - 1; i >= 0; i--) {
      if (i !== j) {
        n = n * 10 + num[i];
      }
    }
    count = Math.max(n, count);
  }
  return count;
}

module.exports = {
  deleteDigit
};
