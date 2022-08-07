/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxLeft = height[leftIndex];
  let maxRight = height[rightIndex];
  let result = 0;
  let iteration = 0;
  while (leftIndex < rightIndex) {
    iteration++;
    if (maxLeft < maxRight) {
      leftIndex++;
      maxLeft = Math.max(maxLeft, height[leftIndex]);
      result += maxLeft - height[leftIndex];
    } else if (maxRight <= maxLeft) {
      rightIndex--;
      maxRight = Math.max(maxRight, height[rightIndex]);
      result += maxRight - height[rightIndex];
    }
  }
  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

console.log(trap([4, 2, 0, 3, 2, 5]));
// Input: height = [4, 2, 0, 3, 2, 5];
// Output: 9;
