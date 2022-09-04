/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let res = right;
  while (left <= right) {
    let middle = Math.ceil((left + right) / 2);
    let hours = 0;
    piles.forEach((item) => {
      hours += Math.ceil(item / middle);
    });
    if (hours <= h) {
      res = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return res;
};

minEatingSpeed([3, 6, 7, 11], 8);
// Input: piles = [3,6,7,11], h = 8
// Output: 4

minEatingSpeed([30, 11, 23, 4, 20], 5);
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

minEatingSpeed([30, 11, 23, 4, 20], 6);
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// Constraints:

//     1 <= piles.length <= 104
//     piles.length <= h <= 109
//     1 <= piles[i] <= 109
