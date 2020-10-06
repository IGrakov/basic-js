const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber = 0, turnsSpeed = 0) {

  let result = {
    turns: 0,
    seconds: 0
  }

  function calculateHanoiInner(disksNumber = 0, turnsSpeed = 0) {
    if (disksNumber === 1) {
      result.turns++;
      result.seconds += 3600 / turnsSpeed;
    } else {
      calculateHanoiInner(disksNumber - 1, turnsSpeed);
      result.turns++;
      result.seconds += 3600 / turnsSpeed;
      calculateHanoiInner(disksNumber - 1, turnsSpeed);
    }
  }
  
  if (disksNumber > 0 && turnsSpeed > 0) {
    calculateHanoiInner(disksNumber, turnsSpeed);
  }

  result.seconds = Math.floor(result.seconds);

  return result;
}