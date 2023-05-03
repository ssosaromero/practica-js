// const sumOfNegative = (numbers) => {
//   let negativeSum = 0;
//     numbers.forEach((number) => {
//       if (number < 0) {
//       negativeSum = negativeSum + number;
//     }
//   });
//   return negativeSum;
// };

const sumOfNegative = (numbers) => {
  let result = 0;
  for (let i = 0; i < numbers.length; ++i) {
      if (numbers[i] < 0) {
          result += numbers[i];
      }
  }
  return result;
};


// Usage example:


console.log(sumOfNegative([-4, 5, -2, 9]));

module.exports = sumOfNegative; // Do not remove.

// TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.


// declara funcion(metodo)
// declara variable:negativeSum
// iterar array(numbers)
// verificar valores de numbers = <0
// sumar negativos
// return suma
