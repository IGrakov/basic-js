const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(inputDate) {

  const seasons = [winter, spring, summer, autumn];

  if (typeof inputDate === 'undefined') {
    return 'Unable to determine the time of year!';
  } else if (!(inputDate instanceof Date)) {
    throw new Error ('Argument is invalid');
  }

  let inputMonth = inputDate.getMonth;

  if (inputMonth === 12 || inputMonth === 1 || inputMonth === 2) {
    return seasons[0];
  } else if (inputMonth > 2 && inputMonth < 6) {
    return seasons[1];
  } else if (inputMonth > 5 && inputMonth < 9) {
    return seasons[2];
  } else {
    return seasons[3];
  }

}