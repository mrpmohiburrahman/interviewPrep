var generate = function (numRows) {
  const pascalRows = [];

  for (let index = 0; index < numRows; index++) {
    if (index === 0) pascalRows.push([1]);
    else if (index === 1) pascalRows.push([1, 1]);
    else {
      const lastElement = pascalRows[pascalRows.length - 1];
      const newRow = [1];
      for (let index = 0; index < lastElement.length - 1; index++) {
        newRow.push(lastElement[index] + lastElement[index + 1]);
      }
      newRow.push(1);
      pascalRows.push(newRow);
    }
  }
  return pascalRows;
};

generate(5);
