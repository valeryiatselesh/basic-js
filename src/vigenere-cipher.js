const { NotImplementedError } = require('../extensions/index.js');

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
   constructor(type = true) {
      this.type = type;
   }

   encrypt(message, key) {
      if (message === undefined || key === undefined) {
         throw new Error("Incorrect arguments!");
      }

      let result = '';
      let index = 0;

      message = message.toUpperCase();
      key = key.toUpperCase();

      for (let i = 0; i < message.length; i++) {
         if (message[i].match(/[A-Z]/)) {
            let encode = ((message.charCodeAt(i) - 65) + (key.charCodeAt(index % key.length) - 65)) % 26;
            result += String.fromCharCode(encode + 65);
            index++;
         } else {
            result += message[i];
         }
      }

      if (this.type) {
         return result;
      } else {
         return result.split('').reverse().join('');
      }
   }
   decrypt(message, key) {
      if (message === undefined || key === undefined) {
         throw new Error("Incorrect arguments!");
      }

      let result = '';
      let index = 0;

      message = message.toUpperCase();
      key = key.toUpperCase();

      for (let i = 0; i < message.length; i++) {
         if (message[i].match(/[A-Z]/)) {
            let encode = ((message.charCodeAt(i) - 65) - (key.charCodeAt(index % key.length) - 65) + 26) % 26;
            result += String.fromCharCode(encode + 65);
            index++;
         } else {
            result += message[i];
         }
      }

      if (this.type) {
         return result;
      } else {
         return result.split('').reverse().join('');
      }
   }
}

module.exports = {
   VigenereCipheringMachine
};
