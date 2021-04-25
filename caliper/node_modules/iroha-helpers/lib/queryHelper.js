"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buffer = require("buffer");

var _ed = require("ed25519.js");

var _jsSha = require("js-sha3");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _primitive_pb = require("./proto/primitive_pb");

var Queries = _interopRequireWildcard(require("./proto/queries_pb"));

var _util = require("./util.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var emptyQuery = function emptyQuery() {
  return new Queries.Query();
};
/**
 * Returns payload from the query or a new one
 * @param {Object} query
 */


var getOrCreatePayload = function getOrCreatePayload(query) {
  return query.hasPayload() ? (0, _lodash.default)(query.getPayload()) : new Queries.Query.Payload();
};
/**
 * Returns new query with added command.
 * @param {Object} query base query
 * @param {stringing} queryName name of a query. For reference, visit http://iroha.readthedocs.io/en/latest/api/queries.html
 * @param {Object} params query parameters. For reference, visit http://iroha.readthedocs.io/en/latest/api/queries.html
 */


var addQuery = function addQuery(query, queryName, params) {
  var payloadQuery = new Queries[(0, _util.capitalize)(queryName)]();

  var _arr = Object.entries(params);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    if ('set' + (0, _util.capitalize)(key) === 'setPaginationMeta') {
      var paginationMeta = new Queries.TxPaginationMeta();
      paginationMeta.setPageSize(value.pageSize);
      paginationMeta.setFirstTxHash(value.firstTxHash);
      payloadQuery['set' + (0, _util.capitalize)(key)](paginationMeta);
    } else {
      payloadQuery['set' + (0, _util.capitalize)(key)](value);
    }
  }

  var payload = getOrCreatePayload(query);
  payload['set' + (0, _util.capitalize)(queryName)](payloadQuery);
  var queryWithQuery = (0, _lodash.default)(query);
  queryWithQuery.setPayload(payload);
  return queryWithQuery;
};
/**
 * Returns new query with meta information
 * @param {Object} query base query
 * @param {Object} meta - meta info
 * @param {stringing} meta.creatorAccountId accountID of query's creator
 * @param {Number} meta.createdTime time of query creation
 * @param {Number} meta.queryCounter query counter (will be removed soon)
 */


var addMeta = function addMeta(query, _ref) {
  var creatorAccountId = _ref.creatorAccountId,
      _ref$createdTime = _ref.createdTime,
      createdTime = _ref$createdTime === void 0 ? Date.now() : _ref$createdTime,
      _ref$queryCounter = _ref.queryCounter,
      queryCounter = _ref$queryCounter === void 0 ? 1 : _ref$queryCounter;
  var meta = new Queries.QueryPayloadMeta();
  meta.setCreatorAccountId(creatorAccountId);
  meta.setCreatedTime(createdTime);
  meta.setQueryCounter(queryCounter);
  var payload = getOrCreatePayload(query);
  payload.setMeta(meta);
  var queryWithMeta = (0, _lodash.default)(query);
  queryWithMeta.setPayload(payload);
  return queryWithMeta;
};
/**
 * Returns new signed query
 * @param {Object} query base query
 * @param {stringing} privateKeyHex - private key of query's creator in hex.
 */


var sign = function sign(query, privateKeyHex) {
  var privateKey = _buffer.Buffer.from(privateKeyHex, 'hex');

  var publicKey = (0, _ed.derivePublicKey)(privateKey);

  var payloadHash = _buffer.Buffer.from(_jsSha.sha3_256.array(query.getPayload().serializeBinary()));

  var signatory = (0, _ed.sign)(payloadHash, publicKey, privateKey);
  var s = new _primitive_pb.Signature();
  s.setPublicKey(publicKey.toString('hex'));
  s.setSignature(signatory.toString('hex'));
  var signedQueryWithSignature = (0, _lodash.default)(query);
  signedQueryWithSignature.setSignature(s);
  return signedQueryWithSignature;
};

var _default = {
  sign: sign,
  addMeta: addMeta,
  addQuery: addQuery,
  emptyQuery: emptyQuery
};
exports.default = _default;