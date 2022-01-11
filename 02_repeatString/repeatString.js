//this function will take in two arguments, string and num
const repeatString = function(word, num) {
// create a variable to hold the string you're going to return
    let onRepeat = '';
// create a loop that repeats the given number of times
    for (let i = 0; i < num; i++) {
// add the given string to the result on each loop
    onRepeat += word;
    }
    return onRepeat;
};

// Do not edit below this line
module.exports = repeatString;
