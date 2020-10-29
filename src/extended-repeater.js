const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let initialStr = '';
  let repeatTimes = 0;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 0;
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

  initialStr += str;

  if (options.repeatTimes === null || options.additionRepeatTimes === null) {
    return initialStr;
  }

  if (options.repeatTimes != null) {
    repeatTimes = options.repeatTimes;
  }

  if (options.additionRepeatTimes != null) {
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if (options.separator != null) {
    separator = options.separator;
  }

  if (options.addition != null) {
    addition = options.addition;
  }

  if (options.additionSeparator != null) {
    additionSeparator = options.additionSeparator;
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
  