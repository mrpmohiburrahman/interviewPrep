const biggest = (numbers) => {
  console.log(numbers);
  if (numbers.length === 1) return numbers[0];
  let first = numbers[0];
  let rest = biggest(numbers.slice(1));
  //   return first > rest ? first : rest;
  return numbers[0] > biggest(numbers.slice(1)) ? numbers[0] : numbers[1];
};
console.log(biggest([3, 7, 9, 10]));
