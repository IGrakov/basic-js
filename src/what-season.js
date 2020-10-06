const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(inputDate) {

  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  if (typeof inputDate === 'undefined') {
    return 'Unable to determine the time of year!';
  // else if (!(inputDate && Object.prototype.toString.call(inputDate) === "[object Date]" && !isNaN(inputDate)))
  } else if (!(Object.prototype.toString.call(inputDate) === "[object Date]")) {
    throw new Error ('Argument is invalid');
  }

  let inputMonth = inputDate.getMonth();

  if (inputMonth === 11 || inputMonth === 0 || inputMonth === 1) {
    return seasons[0];
  } else if (inputMonth > 1 && inputMonth < 5) {
    return seasons[1];
  } else if (inputMonth > 4 && inputMonth < 8) {
    return seasons[2];
  } else {
    return seasons[3];
  }

}