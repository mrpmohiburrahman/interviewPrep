/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (const item of tokens) {
    if (item === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (item === "-") {
      const [a, b] = [stack.pop(), stack.pop()];
      stack.push(b - a);
    } else if (item === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (item === "/") {
      const [a, b] = [stack.pop(), stack.pop()];
      stack.push(parseInt(b / a));
    } else {
      stack.push(parseInt(item));
    }
  }
  return stack;
  //   console.log(`stack === ${stack}`);
};

evalRPN(["2", "1", "+", "3", "*"]);
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

evalRPN(["4", "13", "5", "/", "+"]);
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// Constraints:

//     1 <= tokens.length <= 104
//     tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
