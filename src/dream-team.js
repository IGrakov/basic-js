const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members.isArray()) {
    return false;
  }
  res = [];

  members.array.forEach(element => {
    if (typeof element === 'string' ) 
      if (element.length > 0) {
        element.trim();
        res.push(element[0]);
    }
  });

  return res.sort().join('').toUpperCase();
};
