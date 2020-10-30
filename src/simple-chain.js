//const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: '',
  chainValues: [],

  getLength() {
    return this.chainValues.length;
  },
  addLink(value = '') {
    let valueInit = String(value);
    if (value === '' && this.getLength() === 0) {
      this.chain += '( )';
    } else if (value === '') {
    	this.chain += '~~( )';
    } else if (typeof value === 'object' && value !== null && this.getLength() === 0) {
      this.chain += '( [object Object] )';
      valueInit = '[object Object]';
    } else if (typeof value === 'object' && value !== null ) {
      this.chain += '~~( [object Object] )';
      valueInit = '[object Object]';
    } else if (this.getLength() === 0) {
     	this.chain = this.chain + '( ' + String(value) + ' )';
    } else {
      this.chain = this.chain + '~~( ' + String(value) + ' )';
    }

    this.chainValues.push(valueInit);
    return this;
  },
  removeLink(position) {
    if (Number.isNaN(position) || !Number.isInteger(position) || position > this.chainValues.length || this.chainValues < 1) throw Error;

    this.chainValues.splice(position - 1 , 1);

    this.chain = '';
    for (let i = 0; i < this.chainValues.length; i++) {
    	if (this.chainValues[i] === '' && i === 0) {
      	this.chain += '( )';
      } else if(this.chainValues[i] === '') {
      	this.chain += '~~( )';
      } else if (i === 0) {
        this.chain = this.chain + '( ' + this.chainValues[i] + ' )';
      } else {
      	this.chain = this.chain + '~~( ' + this.chainValues[i] + ' )';
      }
    }
    return this;
  },
  reverseChain() {
    this.chainValues = this.chainValues.reverse();
    this.chain = '';
    for (let i = 0; i < this.chainValues.length; i++) {
    	if (this.chainValues[i] === '' && i === 0) {
      	this.chain += '( )';
      } else if(this.chainValues[i] === '') {
      	this.chain += '~~( )';
      } else if (i === 0) {
        this.chain = this.chain + '( ' + this.chainValues[i] + ' )';
      } else {
      	this.chain = this.chain + '~~( ' + this.chainValues[i] + ' )';
      }
    }
    return this;
  },
  finishChain() {
    return this.chain;
  }
};

module.exports = chainMaker;
