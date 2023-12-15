/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.flat().reduce((acc, v) => (acc += v === "^^" ? 1 : 0), 0);
}

module.exports = {
  countCats,
};

// console.log(countCats([[0, 1, '^^'],[0, '^^', 2],['^^', 1, 2]]))
