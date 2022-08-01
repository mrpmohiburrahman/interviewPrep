/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = [];
  let map = new Map();
  for (let index = 0; index < strs.length; index++) {
    const sortedString = strs[index].split("").sort().join("");
    if (map.has(sortedString)) {
      map.get(sortedString).push(strs[index]);
    } else {
      map.set(sortedString, [strs[index]]);
    //   console.log(`[map] values === ${[...map.values()]}`);
    //   console.log(`[map] keys === ${[...map.keys()]}`);
    }
  }
  for (const [key, value] of map) {
    result.push(value);
  }
//   console.log(`result === ${JSON.stringify(result)}`);
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// console.log(groupAnagrams([""]));
// Input: strs = [""]
// Output: [[""]]

// console.log(groupAnagrams(["a"]));
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
