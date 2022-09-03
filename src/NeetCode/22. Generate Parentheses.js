/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const stack = [];
  const res = [];
  function backtrack(openN, closedN) {
    if (openN === closedN && closedN === n) {
      console.log(stack.join(""));
      res.push(stack.join(""));
      return;
    }
    if (openN < n) {
      stack.push("(");
      backtrack(openN + 1, closedN);
      stack.pop();
    }
    if (closedN < openN) {
      stack.push(")");
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  }
  backtrack(0, 0);
  //   console.log(`[res] === ${res}`);
  return res;
};

generateParenthesis(3);
// Input: n = 3;
// Output: ["((()))", "(()())", "(())()", "()(())", "()()()"];

// Input: n = 1;
// Output: ["()"];

// Constraints: 1 <= n <= 8;
