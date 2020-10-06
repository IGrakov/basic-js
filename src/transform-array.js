const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not an array');
  } else if (arr.length === 0) {
    return [];
  }
  let transformedArr = arr.slice(-1);

  for (let i = 0; i < transformedArr.length; i++) {
    switch (transformedArr[i]) {
      case '--discard-next':
        // if there is next item delete it
        if (i + 1 < transformedArr.length) {
          transformedArr.splice(i + 1, 1)
        }
        // delete control sequence and decrease counter
        transformedArr.splice(i, 1);
        i--;
        break;
      case '--discard-prev':
        // if there is previous item delete it and decrease counter
        if (i - 1 < 0) {
          transformedArr.splice(i - 1, 1)
          i--;
        }
        // delete control sequence and decrease counter
        transformedArr.splice(i, 1);
        i--;
        break;
      case '--double-next':
        // if there is next item double it
        if (i + 1 < transformedArr.length) {
          transformedArr[i + 1] *= 2;
        }
        // delete control sequence and decrease counter
        transformedArr.splice(i, 1);
        i--;
        break;
      case '--double-prev':
        // if there is previous item double it and decrease counter
        if (i - 1 < 0) {
          transformedArr[i - 1] *= 2;
        }
        // delete control sequence and decrease counter
        transformedArr.splice(i, 1);
        i--;
        break;
    }
  }

  return transformedArr;
}