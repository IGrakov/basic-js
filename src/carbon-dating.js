const CustomError = require("../extensions/custom-error");

const INITIAL_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity = 0) {
    if (typeof sampleActivity != 'string') {
        return false;
    }
    let presentActivity = parseInt(sampleActivity);
    if (isNaN(presentActivity)) {
        return false;
    }
    let calculatedTime = Math.ceil(Math.abs((HALF_LIFE_PERIOD / Math.log(2)) * Math.log(presentActivity / INITIAL_ACTIVITY)));
    return calculatedTime;
}