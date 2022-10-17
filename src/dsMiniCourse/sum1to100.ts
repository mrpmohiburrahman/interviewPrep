const sum1to100 = (numbers) => {
  if (numbers.length === 1) return numbers[0];
  return numbers[0] + sum1to100(numbers.slice(1));
};

const numbers = [1, 2, 3, 4, 5];
console.log(sum1to100(numbers));
