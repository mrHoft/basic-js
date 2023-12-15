/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = "") {
    this.arr.push(value);
    return this;
  },
  removeLink(pos) {
    if (
      typeof pos !== "number" ||
      pos < 1 ||
      pos >= this.arr.length ||
      pos !== parseInt(pos)
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(pos - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    const res = this.arr.map((x) => `( ${x} )`).join(`~~`);
    this.arr = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
