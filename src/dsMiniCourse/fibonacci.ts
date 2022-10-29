// function fib(n: number): number {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

function fib(n: number): number {
  // memoization
  const fibArray: number[] = [0, 1];
  const caluculateFib = (nS: number) => {
    if (nS === 0) return 0;
    if (fibArray[nS] !== undefined) return fibArray[nS];

    let f1 = caluculateFib(nS - 1);
    let f2 = caluculateFib(nS - 2);
    fibArray[nS] = f1 + f2;
    return fibArray[nS];
  };
  const result = caluculateFib(n);
  return result;
}

console.log(fib(2));
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

console.log(fib(3));
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

console.log(fib(4));
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
