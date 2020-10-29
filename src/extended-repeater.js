const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let initialStr = '';
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  let resultingStr = '';

  // if (typeof str != 'string') {
  //   initialString = str.toString();
  // } else {
  //   initialStr = str;
  // }

  // if (typeof options.addition != 'string') {
  //   addition = options.addition.toString();
  // } else {
  //   initialStr = options.addition;
  // }

  initialStr = String(str);

  if (!options.hasOwnProperty('repeatTimes') || options.repeatTimes != null || options.repeatTimes != undefined) {
    repeatTimes = options.repeatTimes;
  }

  if (!options.hasOwnProperty('additionRepeatTimes' || options.additionRepeatTimes != null || options.additionRepeatTimes != undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if (options.hasOwnProperty('separator')) {
    separator = String(options.separator);
  }

  if (options.hasOwnProperty('addition')) {
    addition = String(options.addition);
  }

  if (options.hasOwnProperty('additionSeparator')) {
    additionSeparator = String(options.additionSeparator);
  }

  for (let i = 0; i < repeatTimes; i++) {
    resultingStr += initialStr;

    for (let j = 0; j < additionRepeatTimes; j ++) {
      resultingStr += addition;

      if (j < additionRepeatTimes - 1) {
        resultingStr += additionSeparator;
      }
    }

    if (i < repeatTimes - 1) {
      resultingStr += separator;
    }
  }

  return resultingStr;

};
  