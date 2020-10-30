const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: '',
  chainValues: [],

  getLength() {
    return this.chainValues.length;
  },
  addLink(value = '') {
    this.chainValues.push(String(value));
    if (value === '') {
      this.chain.concat('~~( )');
    } else {
      this.chain.concat('~~( ', String(value), ' )');
    }
    return this;
  },
  removeLink(position) {
    if (Number.isNaN(position) || !Number.isInteger(position) || position > this.chainValues.length || this.chainValues < 1) throw Error;

    this.chainValues.splice(position - 1 , 1);

    this.chain = '';
    for (let i = 0; i < this.chainValues.length; i++) {
      this.chain.concat('~~( ', chainValues[i], ' )');
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('').reverse().join('');
    this.chainValues = this.chainValues.reverse();
    return this;
  },
  finishChain() {
    return this.chain;
  }
};

module.exports = chainMaker;
