/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sMap = {};
  let tMap = {};
  for (let index = 0; index < s.length; index++) {
    if (sMap.hasOwnProperty(s[index])) {
      sMap[s[index]]++;
    } else {
      sMap[s[index]] = 1;
    }
    if (tMap.hasOwnProperty(t[index])) {
      tMap[t[index]]++;
    } else {
      tMap[t[index]] = 1;
    }
  }
  for (const key in sMap) {
    if (sMap[key] !== tMap[key]) return false;
  }
  return true;
};

// some times interviwers assumes sorting takes O(1) times
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const sortedS = [...s].sort();
//   const sortedT = [...t].sort();
//   for (let index = 0; index < sortedS.length; index++) {
//     if (sortedS[index] !== sortedT[index]) return false;
//   }
//   return true;
// };

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
