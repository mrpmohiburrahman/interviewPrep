/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let result = 0;
  let charSet = new Set();
  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    result = Math.max(result, charSet.size);
  }
  return result;
};

console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("abcabcbb"));
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

console.log(lengthOfLongestSubstring("bbbbb"));
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

console.log(lengthOfLongestSubstring("pwwkew"));
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
