/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let top = 0;
  let bottom = matrix.length - 1;
  while (top <= bottom) {
    const row = Math.floor((top + bottom) / 2);
    if (target > matrix[row][matrix[row].length - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bottom = row - 1;
    } else break;
  }
  if (top > bottom) return false;

  let row = Math.floor((top + bottom) / 2);

  let left = 0;
  let right = matrix[row].length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target > matrix[row][middle]) {
      left = middle + 1;
    } else if (target < matrix[row][middle]) {
      right = middle - 1;
    } else return true;
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:

//     m == matrix.length
//     n == matrix[i].length
//     1 <= m, n <= 100
//     -104 <= matrix[i][j], target <= 104
