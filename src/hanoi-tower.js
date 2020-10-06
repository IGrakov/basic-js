const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber = 0, turnsSpeed = 0) {

  let result = {
    turns: 0,
    seconds: 0
  }
  
  if (disksNumber > 0 && turnsSpeed > 0) {
    result.turns = 2 ** disksNumber - 1;
    result.seconds = Math.floor(result.turns * 3600 / turnsSpeed);
  }

  return result;
}