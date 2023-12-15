/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const len = matrix[0].length;
  const arr = matrix.flat();
  return arr.reduce((acc, v, i) => (acc += arr[i - len] !== 0 ? v : 0), 0);
}

module.exports = {
  getMatrixElementsSum,
};
