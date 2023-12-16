/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  alph = "";
  code = [];
  direct = true;
  constructor(direct = true) {
    this.alph = this.abc + this.abc;
    this.direct = direct;
  }

  gencode(key) {
    this.code = key.split("").map((c) => this.abc.indexOf(c));
  }

  encode(str) {
    let res = "";
    let place = 0;
    for (let i = 0; i < str.length; ++i) {
      while (place >= this.code.length) place -= this.code.length;
      const shift = this.code[place];
      const index = this.alph.indexOf(str[i]);
      place += index !== -1 ? 1 : 0;
      res += index !== -1 ? this.alph[index + shift] : str[i];
    }
    return res;
  }
  encrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    this.gencode(key.toUpperCase());

    if (this.direct) return this.encode(str.toUpperCase());
    return this.encode(str.toUpperCase()).split("").reverse().join("");
  }

  decode(str) {
    let res = "";
    const len = this.abc.length;
    let place = 0;
    for (let i = 0; i < str.length; ++i) {
      while (place >= this.code.length) place -= this.code.length;
      const shift = this.code[place];
      const index = this.alph.indexOf(str[i]);
      place += index !== -1 ? 1 : 0;
      res += index !== -1 ? this.alph[len + index - shift] : str[i];
    }
    return res;
  }
  decrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    this.gencode(key.toUpperCase());

    if (this.direct) return this.decode(str.toUpperCase());
    return this.decode(str.toUpperCase()).split("").reverse().join("");
  }
}
/* 
const machine = new VigenereCipheringMachine();
console.log(machine.encrypt("attack at dawn!", "alphonse"));
console.log("AEIHQX SX DLLU!\n");

console.log(machine.decrypt("AEIHQX SX DLLU!", "alphonse"));
console.log("ATTACK AT DAWN!\n");

const reverseMachine = new VigenereCipheringMachine(false);
console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
console.log("!ULLD XS XQHIEA\n");

console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
console.log("!NWAD TA KCATTA\n");
 */
module.exports = {
  VigenereCipheringMachine,
};
