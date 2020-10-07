const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
/*   constructor() {
    this.depthMax = 0;
  } */

  calculateDepth(arr) {
    let currentDepth = 0;
    let maxDepth = 0;
    if (Array.isArray(arr)) {
      arr.forEach(element => {
        currentDepth = calculateDepth(element);
        currentDepth > maxDepth ? maxDepth = currentDepth : 0;
      });
    }
    return maxDepth + 1;
  }
};