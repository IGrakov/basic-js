const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.cipheringMachineType = type;
    this.dict = ['A', 'B', 'C', 'D', 'E',
                'F', 'G', 'H', 'I', 'J',
                'K', 'L', 'M', 'N', 'O',
                'P', 'Q', 'R', 'S', 'T',
                'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {
    if (message === null || key === null) throw Error;
    let messageToEncrypt = message.toUpperCase();
    let encryptionKey = key.toUpperCase();
    let encryptedMessage = '';

    let plainMessageToEncrypt = '';
    let plainEncryptionKey = '';
    let fullEncryptionKey = '';

    // select only Latin letters from the original message
    // i.e. plain message
    for (let i = 0; i < messageToEncrypt.length; i++) {
      if (this.dict.indexOf(messageToEncrypt[i]) !== -1) {
        plainMessageToEncrypt += messageToEncrypt[i];
      }
    }

    // calculate repeated key length based on plain message
    let factor = Math.trunc(plainMessageToEncrypt.length / encryptionKey.length);
    let remainder = plainMessageToEncrypt.length % encryptionKey.length;
    plainEncryptionKey = encryptionKey.repeat(factor) + encryptionKey.substring(0, remainder);

    // make full key by adding arbitrary symbol at the same positions
    // where other symbols than Latin letters are in original message
    let counter = 0;
    for (let i = 0; i < messageToEncrypt.length; i++) {
      if (this.dict.indexOf(messageToEncrypt[i]) !== -1) {
        fullEncryptionKey += plainEncryptionKey[counter];
        counter++;
      } else {
        fullEncryptionKey += "x";
      }
    }

    for (let i = 0; i < messageToEncrypt.length; i++) {
      // if symbol in message to encrypt is not a Latin letter
      // meaning it is not in the dict add it to resulting message unchanged
      if (this.dict.indexOf(messageToEncrypt[i]) === -1) {
        encryptedMessage += String(messageToEncrypt[i]);
      } else {
        encryptedMessage += this.dict[(this.dict.indexOf(messageToEncrypt[i]) + 
                                        this.dict.indexOf(fullEncryptionKey[i])) % 26];
      }
    }
  
    if (this.cipheringMachineType) {
      return encryptedMessage
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
  }

  decrypt(message, key) {
    if (message === null || key === null) throw Error;

    let messageToDecrypt = message.toUpperCase();
    let decryptionKey = key.toUpperCase();
    let decryptedMessage = '';

    let plainMessageToDecrypt = '';
    let plainDecryptionKey = '';
    let fullDecryptionKey = '';

    // select only Latin letters from the original message
    // i.e. plain message
    for (let i = 0; i < messageToDecrypt.length; i++) {
      if (this.dict.indexOf(messageToDecrypt[i]) !== -1) {
        plainMessageToDecrypt += messageToDecrypt[i];
      }
    }
  
    // calculate repeated key length based on plain message
    let factor = Math.trunc(plainMessageToDecrypt.length / decryptionKey.length);
    let remainder = plainMessageToDecrypt.length % decryptionKey.length;
    plainDecryptionKey = decryptionKey.repeat(factor) + decryptionKey.substring(0, remainder);

    // make full key by adding arbitrary symbol at the same positions
    // where other symbols than Latin letters are in original message
    let counter = 0;
    for (let i = 0; i < messageToDecrypt.length; i++) {
      if (this.dict.indexOf(messageToDecrypt[i]) !== -1) {
        fullDecryptionKey += plainDecryptionKey[counter];
        counter++;
      } else {
        fullDecryptionKey += "x";
      }
    }

    for (let i = 0; i < messageToDecrypt.length; i++) {
      // if symbol in message to decrypt is not a Latin letter
      // meaning it is not in the dict add it to resulting message unchanged
      if (this.dict.indexOf(messageToDecrypt[i]) === -1) {
        decryptedMessage += String(messageToDecrypt[i]);
      } else {
        decryptedMessage += this.dict[(this.dict.indexOf(messageToDecrypt[i]) - 
                                        this.dict.indexOf(fullDecryptionKey[i]) + 26) % 26];
      }
    }

    if (this.cipheringMachineType) {
      return decryptedMessage
    } else {
      decryptedMessage.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
