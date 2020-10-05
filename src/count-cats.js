const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catCounter = 0;
  let cat = '^^';

  backyard.forEach(element => {
    if (element.includes(cat)) {
      catCounter++;
    }
  });

  return catCounter;
}
