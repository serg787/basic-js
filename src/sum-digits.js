const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n) {
  let getSum = (data) => data.toString().split('').map(Number).reduce((acc, cur) => acc + Math.abs(cur), 0);
  let s= getSum(n);
  return s.length === 1 ? s : getSum(s)
}

module.exports = {
  getSumOfDigits
};