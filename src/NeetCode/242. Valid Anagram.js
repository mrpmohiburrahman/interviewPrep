/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sortedS = [...s].sort();
  const sortedT = [...t].sort();
  for (let index = 0; index < sortedS.length; index++) {
    if (sortedS[index] !== sortedT[index]) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
// isAnagram("anagram", "nagaram");
// Input: s = "anagram", t = "nagaram"
// Output: true

console.log(isAnagram("rat", "car"));
// isAnagram("rat", "car");
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
