const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, value) => {
    return sum + value;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, value) => {
    return total * value;
  }, 1);
};

const power = function(base, exp) {
  let total = 1;
	for (let i = 0; i < exp; i++) {
    total *= base;
  }
  return total;
};

const factorial = function(a) {
  if (a === 0)
    return 1;
  return a * factorial(a-1);
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
