const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catCounter = 0;
  let cat = '^^';

  backyard.forEach(element => {
    element.forEach(subElement => {
      if (subElement === cat) {
        catCounter++;
      }
    });
  });

  return catCounter;
}
