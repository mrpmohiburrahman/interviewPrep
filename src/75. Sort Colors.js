var sortColors = function (nums) {
  let numOf0s = 0;
  let numOf1s = 0;
  let numOf2s = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) numOf0s++;
    else if (nums[index] === 1) numOf1s++;
    else if (nums[index] === 2) numOf2s++;
  }

  nums.fill(0, 0, numOf0s);
  nums.fill(1, numOf0s, numOf0s + numOf1s);
  nums.fill(2, numOf0s + numOf1s, numOf0s + numOf1s + numOf2s);
};
// sortColors([2, 0, 2, 1, 1, 0]);
console.log(sortColors([2, 0, 2, 1, 1, 0]));
