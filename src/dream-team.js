const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }

  let s = "";
  let k = "";
  let d = 0;
  for (let i of members) {
    if (typeof(i) === "string") {
      k = i.split(' ').join('');
      s += (k.slice(0, 1)).toUpperCase();
    } else d = d + 1;
  }
  let arr = s.split("");
  arr.sort();
  let str = arr.join("");
  if (members.length !== d) {
    return str;
  } else return false;
}


module.exports = {
  createDreamTeam
};
