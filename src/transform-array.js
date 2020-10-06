const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not an array');
  } else if (arr.length === 0) {
    return [];
  }
  let transformedArr = arr.slice();

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
        if (i - 1 >= 0) {
          transformedArr.splice(i - 1, 1)
          i--;
        }
        // delete control sequence and decrease counter
        transformedArr.splice(i, 1);
        i--;
        break;
      case '--double-next':
        // if there is next item replace current item by copy of the next one
        if (i + 1 < transformedArr.length) {
          transformedArr[i] = transformedArr[i + 1];
        } else {
          // delete control sequence and decrease counter
          transformedArr.splice(i, 1);
          i--;
        }
        break;
      case '--double-prev':
        // if there is previous item replace current item by copy of the previous one
        if (i - 1 >= 0) {
          transformedArr[i] = transformedArr[i - 1];
        }else {
          // delete control sequence and decrease counter
          transformedArr.splice(i, 1);
          i--;
        }
        break;
    }
  }

  return transformedArr;
}