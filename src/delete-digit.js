/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split("");
  const summ = (except) =>
    Number(arr.reduce((acc, v, i) => (acc += except !== i ? v : ""), ""));
  return arr.reduce((acc, _, i) => (summ(i) > acc ? summ(i) : acc), 0);
}

module.exports = {
  deleteDigit,
};
