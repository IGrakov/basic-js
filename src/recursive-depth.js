const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + arr.reduce(function(a, b) {
      // get the largest by comparing all the adjacent elements dimension
      return Math.max(a, calculateDepth(b));
      }, 0) : 0;
  }
};