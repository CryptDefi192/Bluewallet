const bitcoin = require('bitcoinjs-lib');
const bitcoinil = require('bitcoiniljs-lib');

function getBitcoinLib(isIl = false) {
    if(isIl) {
      return bitcoinil;
    } else {
      return bitcoin;
    }
  }

module.exports = getBitcoinLib
