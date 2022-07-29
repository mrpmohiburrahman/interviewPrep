/**
 * @param {string} s
 * @return {boolean}
 */
// using hashmap
// time complexity: O(n)
// space complexity: O(n)
var isValid = function (s) {
  if (!s) return false;
  const closeMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (let index = 0; index < s.length; index++) {
    const curItem = s[index];
    if (closeMap[curItem]) {
      const topElement = stack.length === 0 ? "#" : stack.pop();
      if (topElement !== closeMap[curItem]) return false;
    } else stack.push(s[index]);
  }
  return stack.length === 0;
};

// time complexity: O(n)
// space complexity: O(n)
// var isValid = function (s) {
//   const stack = [s[0]];
//   for (let index = 1; index < s.length; index++) {
//     if (s[index] === ")" && stack[stack.length - 1] === "(") {
//       stack.pop();
//     } else if (s[index] === "}" && stack[stack.length - 1] === "{") {
//       stack.pop();
//     } else if (s[index] === "]" && stack[stack.length - 1] === "[") {
//       stack.pop();
//     } else {
//       stack.push(s[index]);
//     }
//   }
//   if (stack.length) return false;
//   return true;
// };
console.log(isValid("{[]}"));
// console.log(isValid("()"));
// isValid("()");
// Input: s = "()"
// Output: true

// console.log(isValid("()[]{}"));
// isValid("()[]{}");
// Input: s = "()[]{}"
// Output: true

// console.log(isValid("(]"));
// isValid("(]");
// Input: s = "(]";
// Output: false;
