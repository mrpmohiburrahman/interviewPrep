/**
 * @param {string} s
 * @return {boolean}
 */

// technique: constant memory
var isPalindrome = function (s) {
  const ALPHA_NUM = /^[a-zA-Z0-9]$/;
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    while (leftIndex < rightIndex && !ALPHA_NUM.test(s[leftIndex])) {
      leftIndex++;
    }
    while (leftIndex < rightIndex && !ALPHA_NUM.test(s[rightIndex])) {
      rightIndex--;
    }
    if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase())
      return false;
    leftIndex++;
    rightIndex--;
  }
  return true;
};

// technique: using extra memory
// var isPalindrome = function (s) {
//   const alphaNumericString = s
//     .toLowerCase()
//     .replaceAll(" ", "")
//     .replace(/[^a-z0-9]/gi, "");
//   for (
//     let i = 0, j = alphaNumericString.length - 1;
//     i < alphaNumericString.length / 2;
//     i++, j--
//   ) {
//     if (alphaNumericString[i] !== alphaNumericString[j]) return false;
//   }
//   return true;
// };

console.log(
  isPalindrome("A man, a plan, a canal: Pan                               ama")
);
// isPalindrome("A man, a plan, a canal: Pan                               ama");
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

console.log(isPalindrome("race a car"));
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

console.log(isPalindrome(" "));
// isPalindrome(" ");
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
