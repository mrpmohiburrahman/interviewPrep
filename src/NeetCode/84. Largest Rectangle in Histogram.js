/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = []; // pair(index, heights)
  for (let index = 0; index < heights.length; index++) {
    let start = index;
    let h = heights[index];
    while (stack.length >= 1 && stack[stack.length - 1][1] > h) {
      const [tempIndex, tempHeights] = stack.pop();
      maxArea = Math.max(maxArea, tempHeights * (index - tempIndex));
      start = tempIndex;
    }
    stack.push([start, h]);
  }

  for (let index = 0; index < stack.length; index++) {
    const [tempIndex, tempHeights] = stack[index];
    maxArea = Math.max(maxArea, tempHeights * (heights.length - tempIndex));
  }
  return maxArea;
};

// largestRectangleArea([2, 1, 5, 6, 2, 3]);
// Input: heights = [2,1,5,6,2,3]

// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

largestRectangleArea([2, 4]);
// largestRectangleArea([2, 4]);
// Input: heights = [2,4]
// Output: 4

// Constraints:

//     1 <= heights.length <= 105
//     0 <= heights[i] <= 104
