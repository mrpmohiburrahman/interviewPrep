/**
 * @param {string} s
 * @return {boolean}
 */

// brute force
// time complexity: O(n^2)
// space complexity: it's using extra spaces
var isPalindrome = function (s) {
  const alphaNumericString = s
    .toLowerCase()
    .replaceAll(" ", "")
    .replace(/[^a-z0-9]/gi, "");

  //   console.log(alphaNumericString.length);
  //   console.log(Math.floor(alphaNumericString.length / 2));
  for (
    let i = 0, j = alphaNumericString.length - 1;
    i < alphaNumericString.length / 2;
    i++, j--
  ) {
    if (alphaNumericString[i] !== alphaNumericString[j]) return false;
    // console.log(`alphaNumericString[${i}] [i] === ${alphaNumericString[i]}`);
    // console.log(`alphaNumericString[${j}] [j] === ${alphaNumericString[j]}`);
  }
  return true;
  //   console.log(
  //     s
  //       .toLowerCase()
  //       .replaceAll(" ", "")
  //       .replace(/[^a-z0-9]/gi, "")
  //   );
};

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
