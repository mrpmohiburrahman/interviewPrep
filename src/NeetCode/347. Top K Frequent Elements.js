/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hashMap = {};
  nums.forEach((item) => {
    if (!hashMap[item]) {
      hashMap[item] = 1;
    } else if (hashMap[item]) {
      hashMap[item]++;
    }
  });

  const hashArray = [];
  for (const key in hashMap) {
    hashArray.push([parseInt(key), hashMap[key]]);
  }
  hashArray.sort((a, b) => {
    return a[1] > b[1] ? -1 : 1;
  });

  const returnedArray = [];
  for (let index = 0; index < k; index++) {
    returnedArray.push(hashArray[index][0]);
  }
  return returnedArray;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
//Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// console.log([1],1)
// Input: nums = [1], k = 1
// Output: [1]
