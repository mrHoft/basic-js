/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s = s2.split("");
  return s1.split("").reduce((acc, c) => {
    const i = s.indexOf(c);
    if (i !== -1) {
      s.splice(i, 1);
      acc += 1;
    }
    return acc;
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
