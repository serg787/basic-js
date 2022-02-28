const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  let a;
  for (let i = 0; i < domains.length; i++) {
    a = domains[i].split('.').reverse();
    a[0] = '.'.concat(a[0]);
    for (let j = 0; j < a.length; j++) {
      if (a[j + 1]) {
        a[j + 1] = a[j].concat('.', a[j + 1]);
      }
      if (Object.prototype.hasOwnProperty.call(result, (a[j]))) {
        result[a[j]] += 1;
      } else {
        result[a[j]] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
