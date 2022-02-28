const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainMaker: [],
  getLength() {
    return this.chainMaker.length
  },
  addLink( value ) {
    this.chainMaker.splice(this.getLength(), 0, value)
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) ||
        position < 1 ||
        position > this.getLength()) {
      this.chainMaker = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chainMaker.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chainMaker.reverse()
    return this
  },
  finishChain() {
    let a = this.chainMaker
        .map(b => `( ${b} )`)
        .join('~~')
    this.chainMaker = []
    return a
  }
};
module.exports = {
  chainMaker
};
