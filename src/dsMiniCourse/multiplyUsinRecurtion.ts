const multiplyUsinRecurtion = (a, b) => {
  if (b === 0) return 0;
  return a + multiplyUsinRecurtion(a, b - 1);
};

let a = 4,
  b = 4;
console.log(multiplyUsinRecurtion(a, b));