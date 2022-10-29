function integerReplacement(n: number): number {
  if (n === 1) return 0;
  if (n % 2 === 0) return 1 + integerReplacement(n / 2);
  let add1 = 1 + integerReplacement(n + 1);
  let minus1 = 1 + integerReplacement(n - 1);

  return Math.min(add1, minus1);
}

// memoization
// function integerReplacement(number: number): number {
//     let cache: any = {};
//     const recurReplace = (n: number) => {
//       if (n === 1) return 0;
//       if (n in cache && cache[n] !== undefined) return cache[n];
//       if (n % 2 === 0) {
//         cache[n / 2] = integerReplacement(n / 2);
//         return 1 + cache[n / 2];
//       }
//       cache[n + 1] = 1 + integerReplacement(n + 1);
//       cache[n - 1] = 1 + integerReplacement(n - 1);

//       cache[n] = Math.min(cache[n + 1], cache[n - 1]);
//       return cache[n];
//     };
//     return recurReplace(number);
//   }

console.log(integerReplacement(8));
// Input: n = 8
// Output: 3
// Explanation: 8 -> 4 -> 2 -> 1

console.log(integerReplacement(7));
// Input: n = 7
// Output: 4
// Explanation: 7 -> 8 -> 4 -> 2 -> 1
// or 7 -> 6 -> 3 -> 2 -> 1

console.log(integerReplacement(4));
// Input: n = 4
// Output: 2

// Constraints:

//     1 <= n <= 231 - 1
