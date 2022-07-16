/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxPrice = 0;
  let minimum = 10000000;
  for (let index = 0; index < prices.length; index++) {
    minimum = Math.min(minimum, prices[index]);
    maxPrice = Math.max(maxPrice, prices[index] - minimum);
  }
  console.log(maxPrice);
  return maxPrice;
};
maxProfit([2, 4, 1]);
// [7,1,5,3,6,4] === 5
// [7,6,4,3,1] === 0
// [2, 4, 1] === 2
