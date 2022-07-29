const mergeSort = (list) => {
  if (list.length < 2) return [list[0]];
  const middleIndex = Math.floor(list.length / 2);

  const leftArray = list.slice(0, middleIndex);
  const rightArray = list.slice(middleIndex);

  const leftMergeSort = mergeSort(leftArray);
  const rightMergeSort = mergeSort(rightArray);

  return merge(leftMergeSort, rightMergeSort);
};

const merge = (leftArray, rightArray) => {
  const mergedArray = [];
  let leftArrayIndex = 0; // leftArray.length - 1;
  let rightArrayIndex = 0; // rightArray.length - 1;

  while (
    leftArrayIndex < leftArray.length &&
    rightArrayIndex < rightArray.length
  ) {
    if (rightArray[rightArrayIndex] < leftArray[leftArrayIndex]) {
      mergedArray.push(rightArray[rightArrayIndex]);
      rightArrayIndex++;
    } else {
      mergedArray.push(leftArray[leftArrayIndex]);
      leftArrayIndex++;
    }
  }
  if (rightArrayIndex > leftArrayIndex) {
    mergedArray.push(...leftArray.slice(leftArrayIndex));
  } else if (leftArrayIndex > rightArrayIndex) {
    mergedArray.push(...rightArray.slice(rightArrayIndex));
  }

  return mergedArray;
};

// mergeSort([5, 6, 2, 1, 3]);
// mergeSort([5, 6, 1, 2, 3]);
// mergeSort([3, 9, 10, 27, 38, 43, 82]);
// mergeSort([38, 27, 43, 3, 9, 82, 10]);
// mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// mergeSort([4, 3, 2, 1]);
// mergeSort([1, 2, 3, 4]);
// mergeSort([2, 1]);
