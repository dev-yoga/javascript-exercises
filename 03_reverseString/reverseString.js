// first iterative pass (passes tests, checked at each step):

// const reverseString = function(str) {
//     const splitString = str.split('');
//     const reverseSplit = splitString.reverse();
//     return reverseSplit.join('');
// };

// refactored (and passes tests)
const reverseString = function(str) {
    return str
    .split('')
    .reverse()
    .join('');
};


// Do not edit below this line
module.exports = reverseString;
