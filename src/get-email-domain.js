const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
   const separator = '@';
   const domain = email.split(separator);
   return domain[domain.length - 1];
}

module.exports = {
  getEmailDomain
};
