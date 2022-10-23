const validParenthesis = (bracktes) => {
  //   console.log(bracktes[0]);
  if (bracktes.length === 1) return bracktes[0];
  let left = bracktes[0];
  let right = validParenthesis(bracktes.slice(1));
  if (left === "(" && right === `)`) return true;
  else return false;
};
// console.log(validParenthesis(`()`));
console.log(validParenthesis(`()()`));
console.log(validParenthesis(`)()`));
console.log(validParenthesis(`(()`));
console.log(validParenthesis(`(())))`));

// console.log(validParenthesis(`(())`));
// (())
//
//
