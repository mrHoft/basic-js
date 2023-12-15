/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .filter((val) => typeof val === "string")
    .map((val) => val.trim().charAt(0).toUpperCase())
    .sort()
    .join("");
}
/* 
console.log(
  createDreamTeam([
    ["David Abram"],
    ["Robin Attfield"],
    "Thomas Berry",
    ["Paul R.Ehrlich"],
    "donna Haraway",
    " BrIaN_gOodWiN  ",
    {
      0: "Serenella Iovino",
    },
    "Erazim Kohak",
    "  val_plumwood",
  ]),
  "BDETV"
);
 */
module.exports = {
  createDreamTeam,
};
