/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const hashSet = {};
  let result = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (hashSet[s[right]] !== undefined) hashSet[s[right]]++;
    else hashSet[s[right]] = 1;
    while (right - left + 1 - Math.max(...Object.values(hashSet)) > k) {
      hashSet[s[left]]--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
  // console.log(result);
  // console.log(Math.max(...Object.values(hashSet)));
};

// console.log(characterReplacement("ABAB", 2));
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

console.log(characterReplacement("AABABBA", 1));
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length
