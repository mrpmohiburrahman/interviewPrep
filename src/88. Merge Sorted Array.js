/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let mergedArrayLength = m + n - 1;
  let firstArrayPos = m - 1;
  let secondArrayPos = n - 1;
  while (secondArrayPos >= 0) {
    if (nums1[firstArrayPos] > nums2[secondArrayPos]) {
      nums1[mergedArrayLength] = nums1[firstArrayPos];
      firstArrayPos--;
    } else {
      nums1[mergedArrayLength] = nums2[secondArrayPos];
      secondArrayPos--;
    }
    mergedArrayLength--;
  }
};

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// merge([1], 1, [], 0);

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
merge([0], 0, [1], 1);
