const { NotImplementedError } = require('../extensions/index.js');

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
   let newStr = String(n);
   let num = 0;

   for (let i = 0; i < newStr.length; i++) {
      let newNum = Number(newStr.slice(0, i) + newStr.slice(i + 1));

      if (num < newNum) {
         num = newNum;
      }
   }

   return num;
}

module.exports = {
   deleteDigit
};
