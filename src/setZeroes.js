// // // Sample code to perform I/O:
// "use strict";
// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//   stdin_input += input; // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//   main(stdin_input);
// });

// function main(input) {
//   const data = parseInt(input);
//   if (data >= 4 && data % 2 == 0) console.log(`YES`);
//   console.log(`NO`);
//   // process.stdout.write("Hi, " + input + ".\n"); // Writing output to STDOUT
// }

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
// console.log(`hello world`);
// for google
// st;
function main() {
  // const readline = require("readline");
  // // const readline = require("readline");
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout,
  // });

  // let martrix = [];

  // rl.on("line", (line) => {
  //   const data = parseInt(line);
  //   // if (data >= 4 && data % 2 == 0) console.log(`YES`);
  //   // else console.log(`NO`);
  // });
  let matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];

  let indexOf0th = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        // console.log(`1. [${row}][${col}]`);
        indexOf0th.push([row, col]);
      }
    }
  }
  // console.log(indexOf0th);

  // indexOf0th
  // [
  //   [1, 1]
  // ];
  // console.log(`indexOf0th === ${indexOf0th}`);
  // console.log(indexOf0th.length);

  for (let row = 0; row < indexOf0th.length; row++) {
    const matched = indexOf0th[row];
    // console.log(`3. ${matched}`);
    const fixedCol = matched[1];
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][fixedCol] = 0;
    }

    const fixedRow = matched[0];
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[fixedRow][col] = 0;
    }
  }
  console.log(matrix);
}

// for codeforces
// function main() {
//   a = parseInt(readline());
//   print(a % 2 === 0 && a > 2 ? "YES" : "NO");
// }
main();
