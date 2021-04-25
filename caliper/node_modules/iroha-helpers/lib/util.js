"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProtoEnumName = getProtoEnumName;
exports.sendTransactions = sendTransactions;
exports.signWithArrayOfKeys = signWithArrayOfKeys;
exports.capitalize = void 0;

var _txHelper = _interopRequireDefault(require("./txHelper"));

var _endpoint_pb = require("./proto/endpoint_pb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Capitalizes string
 * @param {String} string
 * @returns {String} capitalized string
 */
var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.capitalize = capitalize;
var protoEnumName = {};

function getProtoEnumName(obj, key, value) {
  if (protoEnumName.hasOwnProperty(key)) {
    if (protoEnumName[key].length < value) {
      return 'unknown';
    } else {
      return protoEnumName[key][value];
    }
  } else {
    protoEnumName[key] = [];

    for (var k in obj) {
      var idx = obj[k];

      if (isNaN(idx)) {
        throw Error("getProtoEnumName:wrong enum value, now is type of ".concat(_typeof(idx), " should be integer"));
      } else {
        protoEnumName[key][idx] = k;
      }
    }

    return getProtoEnumName(obj, key, value);
  }
}

function sendTransactions(txs, txClient, timeoutLimit) {
  var requiredStatuses = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ['MST_PENDING', 'COMMITTED'];
  var hashes = txs.map(function (x) {
    return _txHelper.default.hash(x);
  });

  var txList = _txHelper.default.createTxListFromArray(txs);

  return new Promise(function (resolve, reject) {
    /**
     * grpc-node hangs against unresponsive server, which possibly occur when
     * invalid node IP is set. To avoid this problem, we use timeout timer.
     * c.f. {@link https://github.com/grpc/grpc/issues/13163 Grpc issue 13163}
     */
    var timer = setTimeout(function () {
      txClient.$channel.close();
      reject(new Error('Please check IP address OR your internet connection'));
    }, timeoutLimit); // Sending even 1 transaction to listTorii is absolutely ok and valid.

    txClient.listTorii(txList, function (err, data) {
      clearTimeout(timer);

      if (err) {
        return reject(err);
      }

      resolve();
    });
  }).then(function () {
    return new Promise(function (resolve, reject) {
      // Status requests promises
      var requests = hashes.map(function (hash) {
        return new Promise(function (resolve, reject) {
          var statuses = [];
          var request = new _endpoint_pb.TxStatusRequest();
          request.setTxHash(hash.toString('hex'));
          var stream = txClient.statusStream(request);
          stream.on('data', function (response) {
            statuses.push(response);
          });
          stream.on('end', function (end) {
            statuses.length > 0 ? resolve(statuses[statuses.length - 1].getTxStatus()) : resolve(null);
          });
        });
      });
      Promise.all(requests).then(function (values) {
        var statuses = values.map(function (x) {
          return x !== null ? getProtoEnumName(_endpoint_pb.TxStatus, 'iroha.protocol.TxStatus', x) : null;
        });
        statuses.some(function (x) {
          return requiredStatuses.includes(x);
        }) ? resolve() : reject(new Error("Your transaction wasn't commited: expected: ".concat(requiredStatuses, ", actual=").concat(statuses)));
      });
    });
  });
}

function signWithArrayOfKeys(tx, privateKeys) {
  privateKeys.forEach(function (key) {
    tx = _txHelper.default.sign(tx, key);
  });
  return tx;
}