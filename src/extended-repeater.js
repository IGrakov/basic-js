const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let initialStr = '';
  let repeatTimes = 0;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 0;
  let additionSeparator = '|';
  let resultingStr = '';

  if (typeof str != 'string') {
    initialString = str.toString();
  } else {
    initialStr = str;
  }

  if (typeof options.addition != 'string') {
    addition = options.addition.toString();
  } else {
    initialStr = options.addition;
  }

  if (options.repeatTimes === null || options.additionRepeatTimes === null) {
    return initialStr;
  }

};
  