const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber = 0, turnsSpeed = 0) {

  let result = {
    turns: 0,
    seconds: 0
  }
  // if not arguments or zero input do nothing
  // number of turns to solve Tower of Hanoi is 2^n - 1, where is number of disks
  if (disksNumber > 0 && turnsSpeed > 0) {
    result.turns = 2 ** disksNumber - 1;
    result.seconds = Math.floor(result.turns * 3600 / turnsSpeed);
  }

  return result;
}