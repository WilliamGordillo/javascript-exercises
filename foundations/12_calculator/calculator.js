const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((partialSum, a) => partialSum + a, 0)
};

const multiply = function(arr) {
  	return arr.reduce((partialProd, a) => partialProd * a, 1)

};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num1) {
	if (num1 === 0){
    return 1
  }
  else{
    let num_sum = num1
    for(let step = num1;step > 0;step--){
      if(step == 1){
        num_sum = num_sum * 1
        return num_sum
      }
      else{
        num_sum = num_sum * (step - 1)
      }
    }
    return num_sum
  }
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
