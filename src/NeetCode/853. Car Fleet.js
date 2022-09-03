/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const posSpeedPair = [];
  for (let index = 0; index < position.length; index++) {
    posSpeedPair.push([position[index], speed[index]]);
  }
  posSpeedPair.sort((a, b) => a[0] - b[0]);
  const stack = [];
  for (let index = posSpeedPair.length - 1; index >= 0; index--) {
    // console.log(
    //   `(${target} - ${posSpeedPair[index][0]})/${posSpeedPair[index][1]} === ${
    //     (target - posSpeedPair[index][0]) / posSpeedPair[index][1]
    //   }`
    // );
    stack.push((target - posSpeedPair[index][0]) / posSpeedPair[index][1]);
    if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2])
      stack.pop();
  }
  //   console.log(`[stack] === ${JSON.stringify(stack)}`);
  return stack.length;
};

carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
// Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// Output: 3
// Explanation:
// The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
// The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
// The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
// Note that no other cars meet these fleets before the destination, so the answer is 3.

carFleet(10, [3], [3]);
// Input: target = 10, position = [3], speed = [3]
// Output: 1
// Explanation: There is only one car, hence there is only one fleet.

carFleet(100, [0, 2, 4], [4, 2, 1]);
// Input: target = 100, position = [0,2,4], speed = [4,2,1]
// Output: 1
// Explanation:
// The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
// Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.

// Constraints:

//     n == position.length == speed.length
//     1 <= n <= 105
//     0 < target <= 106
//     0 <= position[i] < target
//     All the values of position are unique.
//     0 < speed[i] <= 106
