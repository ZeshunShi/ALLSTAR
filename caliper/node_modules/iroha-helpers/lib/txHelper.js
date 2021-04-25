"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buffer = require("buffer");

var _ed = require("ed25519.js");

var _jsSha = require("js-sha3");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var Commands = _interopRequireWildcard(require("./proto/commands_pb"));

var _endpoint_pb = require("./proto/endpoint_pb");

var _primitive_pb = require("./proto/primitive_pb");

var _transaction_pb = _interopRequireDefault(require("./proto/transaction_pb"));

var _util = require("./util.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Returns new transactions
 * @returns {Object} transaction
 */
var emptyTransaction = function emptyTransaction() {
  return new _transaction_pb.default.Transaction();
};
/**
 * Returns payload from the transaction or a new one
 * @param {Object} transaction
 */


var getOrCreatePayload = function getOrCreatePayload(transaction) {
  return transaction.hasPayload() ? (0, _lodash.default)(transaction.getPayload()) : new _transaction_pb.default.Transaction.Payload();
};
/**
 * Returns reducedPayload from the payload or a new one
 * @param {Object} payload
 */


var getOrCreateReducedPayload = function getOrCreateReducedPayload(payload) {
  return payload.hasReducedPayload() ? (0, _lodash.default)(payload.getReducedPayload()) : new _transaction_pb.default.Transaction.Payload.ReducedPayload();
}; // TODO: Create corner cases for AddPeer, setPermission

/**
 * Returns new query with added command.
 * @param {Object} transaction base transaction
 * @param {String} commandName name of a commandName. For reference, visit http://iroha.readthedocs.io/en/latest/api/commands.html
 * @param {Object} params command parameters. For reference, visit http://iroha.readthedocs.io/en/latest/api/commands.html
 * @returns {Object} transaction with commands
 */


var addCommand = function addCommand(transaction, commandName, params) {
  var payloadCommand = new Commands[(0, _util.capitalize)(commandName)]();

  var _arr = Object.entries(params);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    if ('set' + (0, _util.capitalize)(key) === 'setPeer') {
      var peer = new Commands.Peer();
      peer.setAddress(value.address);
      peer.setPeerKey(value.peerKey);
      payloadCommand['set' + (0, _util.capitalize)(key)](peer);
    } else {
      payloadCommand['set' + (0, _util.capitalize)(key)](value);
    }
  }

  var command = new Commands.Command();
  var commandNameSetter = 'set' + (0, _util.capitalize)(commandName);
  command[commandNameSetter](payloadCommand);
  var payload = getOrCreatePayload(transaction);
  var reducedPayload = getOrCreateReducedPayload(payload);
  reducedPayload.addCommands(command, reducedPayload.getCommandsList.length);
  payload.setReducedPayload(reducedPayload);
  var txWithCommand = (0, _lodash.default)(transaction);
  txWithCommand.setPayload(payload);
  return txWithCommand;
};
/**
 * Returns new transaction with meta information
 * @param {Object} transaction base transaction
 * @param {Object} meta - meta info
 * @param {String} meta.creatorAccountId accountID of transaction's creator
 * @param {Number} meta.createdTime time of transaction creation
 * @param {Number} meta.quorum minimum amount of signatures needed to sign a transaction
 */


var addMeta = function addMeta(transaction, _ref) {
  var creatorAccountId = _ref.creatorAccountId,
      _ref$createdTime = _ref.createdTime,
      createdTime = _ref$createdTime === void 0 ? Date.now() : _ref$createdTime,
      _ref$quorum = _ref.quorum,
      quorum = _ref$quorum === void 0 ? 1 : _ref$quorum;
  var payload = getOrCreatePayload(transaction);
  var reducedPayload = getOrCreateReducedPayload(payload);
  reducedPayload.setCreatorAccountId(creatorAccountId);
  reducedPayload.setCreatedTime(createdTime);
  reducedPayload.setQuorum(quorum);
  payload.setReducedPayload(reducedPayload);
  var transactionWithMeta = (0, _lodash.default)(transaction);
  transactionWithMeta.setPayload(payload);
  return transactionWithMeta;
};
/**
 * Returns new transaction with one more signature
 * @param {Object} transaction base transaction
 * @param {String} privateKeyHex - private key of query's creator in hex.
 */


var sign = function sign(transaction, privateKeyHex) {
  var privateKey = _buffer.Buffer.from(privateKeyHex, 'hex');

  var publicKey = (0, _ed.derivePublicKey)(privateKey);
  var payloadHash = hash(transaction);
  var signatory = (0, _ed.sign)(payloadHash, publicKey, privateKey);
  var s = new _primitive_pb.Signature();
  s.setPublicKey(publicKey.toString('hex'));
  s.setSignature(signatory.toString('hex'));
  var signedTransactionWithSignature = (0, _lodash.default)(transaction);
  signedTransactionWithSignature.addSignatures(s, signedTransactionWithSignature.getSignaturesList.length);
  return signedTransactionWithSignature;
};
/**
 * Returns buffer hash of a transaction
 * @param {Object} transaction base transaction
 * @returns {Buffer} transaction hash
 */


var hash = function hash(transaction) {
  return _buffer.Buffer.from(_jsSha.sha3_256.array(transaction.getPayload().serializeBinary()));
};
/**
 * Returns array of transactions with Batch Meta in them
 * @param {Array} transactions transactions to be included in batch
 * @param {Number} type type of batch transaction, 0 for ATOMIC, 1 for ORDERED
 * @returns {Array} Transactions with all necessary fields
 */


var addBatchMeta = function addBatchMeta(transactions, type) {
  var reducedHashes = transactions.map(function (tx) {
    return (0, _jsSha.sha3_256)(tx.getPayload().getReducedPayload().serializeBinary());
  });
  var batchMeta = new _transaction_pb.default.Transaction.Payload.BatchMeta();
  batchMeta.setReducedHashesList(reducedHashes);
  batchMeta.setType(type);
  var transactionsWithBatchMeta = transactions.map(function (tx) {
    var transaction = (0, _lodash.default)(tx);
    var payload = getOrCreatePayload(transaction);
    payload.setBatch(batchMeta);
    transaction.setPayload(payload);
    return transaction;
  });
  return transactionsWithBatchMeta;
};
/**
 * Returns a TransactionList with transactions from array
 * @param {Array} transactions transactions to be included in batch
 * @returns {Object} TxList with all transactions
 */


var createTxListFromArray = function createTxListFromArray(transactions) {
  var txList = new _endpoint_pb.TxList();
  txList.setTransactionsList(transactions);
  return txList;
}; // TODO: Add types for commands


var _default = {
  addCommand: addCommand,
  addMeta: addMeta,
  sign: sign,
  emptyTransaction: emptyTransaction,
  hash: hash,
  addBatchMeta: addBatchMeta,
  createTxListFromArray: createTxListFromArray
};
exports.default = _default;