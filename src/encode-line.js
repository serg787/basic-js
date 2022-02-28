const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let code = []
  let a = str.length;
  for (let i = 0; i < a; i++) {
    let count = 1;
    while (i < a - 1 && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    if (count > 1) {
      code.push(count);
    }
    code.push(str[i]);

  }
  return code.join('')
}

module.exports = {
  encodeLine
};
