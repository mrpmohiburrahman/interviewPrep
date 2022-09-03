/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const stack = []; // [temp, index]
  for (let index = 0; index < temperatures.length; index++) {
    while (
      stack.length !== 0 &&
      temperatures[index] > stack[stack.length - 1][0]
    ) {
      const [stackT, stackIndex] = stack.pop();
      res[stackIndex] = index - stackIndex;
    }
    stack.push([temperatures[index], index]);
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

console.log(dailyTemperatures([30, 40, 50, 60]));
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

console.log(dailyTemperatures([30, 60, 90]));
// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// Constraints:

//     1 <= temperatures.length <= 105
//     30 <= temperatures[i] <= 100
