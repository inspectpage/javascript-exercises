const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, currentNum) =>{
    return Number(total) + Number(currentNum);
  },0)
};

const multiply = function(array) {
  return array.reduce((total, currentNum) =>{
    return Number(total) * Number(currentNum)
  })
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
  let result = 1;
  if (num === 0){
    result = 1;
  }
  else {
    for (let i = num; 0 < i; i--){
      result *= i
  }}
  return result
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
