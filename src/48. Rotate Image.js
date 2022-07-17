/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
  console.log(matrix);
  matrix.reverse();
  console.log(matrix);
  for (let i = 0; i < matrix.length; i++)
    for (let j = i + 1; j < matrix[i].length; j++)
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
  console.log(matrix);
};
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
