/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let low = 0;
  let high = height.length - 1;
  while (low < high) {
    let tempMaxArea = Math.min(height[low], height[high]);
    
    tempMaxArea = tempMaxArea * (high - low);
    maxArea = Math.max(maxArea, tempMaxArea);
    if (height[low] < height[high]) low++;
    else if (height[low] >= height[high]) high--;
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

console.log(maxArea([1, 1]));
// Input: height = [1,1]
// Output: 1
