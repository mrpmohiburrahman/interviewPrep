/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [s[0]];
  for (let index = 1; index < s.length; index++) {
    if (s[index] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (s[index] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (s[index] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      stack.push(s[index]);
    }
  }
  if (stack.length) return false;
  return true;
};
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
