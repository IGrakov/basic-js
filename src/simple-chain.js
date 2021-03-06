//const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value === undefined ? this.chain.push('( )') : this.chain.push(`( ${String(value)} )`);
    return this;
  },

  removeLink(position) {
    if (Number.isNaN(position) || !Number.isInteger(position) || position > this.chain.length || position < 1) {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1 , 1);
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
