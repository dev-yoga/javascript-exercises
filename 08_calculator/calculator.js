const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  // let sumOfArray = 0;
  // for (let i = 0; i < arr.length; i++) {
  //     sumOfArray += arr[i];
  // }
  // return sumOfArray;
  return arr.reduce((total, current) => total + current, 0)
};


const multiply = function(arr) {
  return arr.length
  ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  } for (let i  = num - 1; i >= 1; i--){
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
