const validParenthesis = (bracktes) => {
  if (bracktes.length === 0) return true;
  if (bracktes.length === 1) return false;
  if (bracktes[0] === `(` && bracktes[bracktes.length - 1] === `)`)
    return validParenthesis(bracktes.slice(1, bracktes.length - 1));
  else return false;
};
console.log(validParenthesis(`()`));
console.log(validParenthesis(`(())`));
console.log(validParenthesis(`((()))`));
console.log(validParenthesis(`(()`));
console.log(validParenthesis(`)(`));
console.log(validParenthesis(`(`));
