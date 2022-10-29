function climbStairs(number: number): number {
  let memoize: number[] = [];
  const recurClimb: any = (n: number) => {
    if (memoize[n] !== undefined) return memoize[n];
    if (n <= 2) return n;
    memoize[n] = recurClimb(n - 1) + recurClimb(n - 2);
    return memoize[n];
  };
  const result: number = recurClimb(number);
  console.log(result);
  return result;
}

// Example 1:
climbStairs(44);
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// climbStairs(3);
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
