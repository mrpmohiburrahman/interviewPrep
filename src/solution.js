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
  const readline = require("readline");
  // const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    const data = parseInt(line);
    if (data >= 4 && data % 2 == 0) console.log(`YES`);
    else console.log(`NO`);
  });
}

// for codeforces
// function main() {
//   a = parseInt(readline());
//   print(a % 2 === 0 && a > 2 ? "YES" : "NO");
// }
main();
