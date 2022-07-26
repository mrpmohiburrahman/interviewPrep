/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return 0;
    return a[0] < b[0] ? -1 : 1;
  });

  if (intervals.length < 2) return intervals;

  let nonOverLappingIntervals = [];
  let prevIntervalStart = intervals[0][0];
  let prevIntervalEnd = intervals[0][1];

  for (let index = 1; index < intervals.length; index++) {
    const currentIntervalStart = intervals[index][0];
    const currentIntervalEnd = intervals[index][1];
    if (currentIntervalStart <= prevIntervalEnd) {
      prevIntervalEnd = Math.max(prevIntervalEnd, currentIntervalEnd);
    } else {
      nonOverLappingIntervals.push([prevIntervalStart, prevIntervalEnd]);
      prevIntervalStart = currentIntervalStart;
      prevIntervalEnd = currentIntervalEnd;
    }
  }
  nonOverLappingIntervals.push([prevIntervalStart, prevIntervalEnd]);
  console.log(nonOverLappingIntervals);
  return nonOverLappingIntervals;
};

merge([
  [1, 4],
  [2, 3],
]);

// merge([
//   [1, 3],
//   [2, 6],
//   [7, 7],
//   [8, 10],
//   [10, 18],
// ]);

// merge([
//   [1, 3],
//   [8, 10],
//   [15, 18],
//   [2, 6],
// ]);

// merge([
//   [1, 4],
//   [4, 5],
// ]);
