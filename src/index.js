
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (!matrix.length) return [];

  let sortedArr = [];

  matrix.forEach((arr, ind) => {
    if (ind % 2 === 0) {
      sortedArr = sortedArr.concat(arr);
    } else {
      let reversedArr = arr.reverse();
      sortedArr = sortedArr.concat(reversedArr);
    }
  })

  return sortedArr;
}

