/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || date[Symbol.toStringTag] === "Date")
    throw new Error("Invalid date!");
  const month = date.getMonth();
  if (month >= 11) return "winter";
  if (month >= 8) return "autumn";
  if (month >= 5) return "summer";
  if (month >= 2) return "spring";
  return "winter";
}

module.exports = {
  getSeason,
};
