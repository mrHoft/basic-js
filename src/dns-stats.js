/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = new Array();
  const ap = domains.map((str) => str.split(".").reverse());
  console.log(ap);
  ap.forEach((arr) =>
    arr.reduce((acc, v) => {
      acc += `.${v}`;
      res.push(acc);
      return acc;
    }, "")
  );
  const count = (str) => res.filter((val) => val === str).length;
  return [...new Set(res)].reduce((acc, v) => ({ ...acc, [v]: count(v) }), {});
}

// getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]);

module.exports = {
  getDNSStats,
};
