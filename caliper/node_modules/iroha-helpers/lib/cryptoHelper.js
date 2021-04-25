"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ed = require("ed25519.js");

/**
 * Returns a new keypair
 */
var generateKeyPair = function generateKeyPair() {
  var keys = (0, _ed.createKeyPair)();
  var publicKey = keys.publicKey.toString('hex');
  var privateKey = keys.privateKey.toString('hex');
  return {
    publicKey: publicKey,
    privateKey: privateKey
  };
};

var _default = {
  generateKeyPair: generateKeyPair
};
exports.default = _default;