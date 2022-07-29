/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minimum = 100000000;
  let maximum = 0;
  for (let index = 0; index < prices.length; index++) {
    minimum = Math.min(minimum, prices[index]);
    maximum = Math.max(maximum, prices[index] - minimum);
  }
  console.log(maximum);
  return maximum;
};
maxProfit([2, 4, 1]);
// [7,1,5,3,6,4] === 5
// [7,6,4,3,1] === 0
// [2, 4, 1] === 2
