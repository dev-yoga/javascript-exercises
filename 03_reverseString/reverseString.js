const reverseString = function(str) {
    const splitString = str.split('');
    const reverseSplit = splitString.reverse();
    return reverseSplit.join('');
};

// Do not edit below this line
module.exports = reverseString;
