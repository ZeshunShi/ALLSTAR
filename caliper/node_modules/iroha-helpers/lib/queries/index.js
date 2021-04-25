"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flow = _interopRequireDefault(require("lodash/fp/flow"));

var _queryHelper = _interopRequireDefault(require("../queryHelper"));

var pbResponse = _interopRequireWildcard(require("../proto/qry_responses_pb"));

var _util = require("../util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  privateKey: '',
  creatorAccountId: '',
  queryService: null,
  timeoutLimit: 5000
  /**
   * wrapper function of queries
   * @param {Object} queryOptions
   * @param {Object} query
   * @param {Function} onResponse
   */

};

function sendQuery() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_OPTIONS,
      privateKey = _ref.privateKey,
      creatorAccountId = _ref.creatorAccountId,
      queryService = _ref.queryService,
      timeoutLimit = _ref.timeoutLimit;

  var query = arguments.length > 1 ? arguments[1] : undefined;
  var onResponse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (resolve, reject, responseName, response) {};
  return new Promise(function (resolve, reject) {
    var queryClient = queryService;
    var queryToSend = (0, _flow.default)(function (q) {
      return _queryHelper.default.addMeta(q, {
        creatorAccountId: creatorAccountId
      });
    }, function (q) {
      return _queryHelper.default.sign(q, privateKey);
    })(query);
    /**
     * grpc-node hangs against unresponsive server, which possibly occur when
     * invalid node IP is set. To avoid this problem, we use timeout timer.
     * c.f. {@link https://github.com/grpc/grpc/issues/13163 Grpc issue 13163}
     */

    var timer = setTimeout(function () {
      queryClient.$channel.close();
      reject(new Error('please check IP address OR your internet connection'));
    }, timeoutLimit);
    queryClient.find(queryToSend, function (err, response) {
      clearTimeout(timer);

      if (err) {
        return reject(err);
      }

      var type = response.getResponseCase();
      var responseName = (0, _util.getProtoEnumName)(pbResponse.QueryResponse.ResponseCase, 'iroha.protocol.QueryResponse', type);
      onResponse(resolve, reject, responseName, response);
    });
  });
}
/**
 * getAccount
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {String} args.accountId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account
 */


function getAccount(queryOptions, _ref2) {
  var accountId = _ref2.accountId;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getAccount', {
    accountId: accountId
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'ACCOUNT_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ACCOUNT_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var account = response.getAccountResponse().getAccount().toObject();
    resolve(account);
  });
}
/**
 * getSignatories
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {String} args.accountId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-signatories
 */


function getSignatories(queryOptions, _ref3) {
  var accountId = _ref3.accountId;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getSignatories', {
    accountId: accountId
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'SIGNATORIES_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=SIGNATORIES_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var account = response.getSignatoriesResponse().toObject().keysList;
    resolve(account);
  });
}
/**
 * getTransactions
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {String[]} args.transactionsHashes
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-transactions
 */


function getTransactions(queryOptions, _ref4) {
  var transactionsHashes = _ref4.transactionsHashes;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getTransactions', {
    transactionsHashes: transactionsHashes
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsResponse();
    resolve(transactions);
  });
}
/**
 * getPendingTransactions
 * @param {Object} queryOptions
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-pending-transactions
 */


function getPendingTransactions(queryOptions) {
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getPendingTransactions', {}), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsResponse().toObject().transactionsList;
    resolve(transactions);
  });
}
/**
 * getRawPendingTransactions
 * @param {Object} queryOptions
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-pending-transactions
 */


function getRawPendingTransactions(queryOptions) {
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getPendingTransactions', {}), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsResponse();
    resolve(transactions);
  });
}
/**
 * getAccountTransactions
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {String} args.accountId
 * @property {Number} args.pageSize
 * @property {String | undefined} args.firstTxHash
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account-transactions
 */


function getAccountTransactions(queryOptions, _ref5) {
  var accountId = _ref5.accountId,
      pageSize = _ref5.pageSize,
      firstTxHash = _ref5.firstTxHash;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getAccountTransactions', {
    accountId: accountId,
    paginationMeta: {
      pageSize: pageSize,
      firstTxHash: firstTxHash
    }
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_PAGE_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_PAGE_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsPageResponse().toObject();
    resolve(transactions);
  });
}
/**
 * getAccountAssetTransactions
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {String} args.accountId
 * @property {String} args.assetId
 * @property {Number} args.pageSize
 * @property {String | undefined} args.firstTxHash
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account-asset-transactions
 */


function getAccountAssetTransactions(queryOptions, _ref6) {
  var accountId = _ref6.accountId,
      assetId = _ref6.assetId,
      pageSize = _ref6.pageSize,
      firstTxHash = _ref6.firstTxHash;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'GetAccountAssetTransactions', {
    accountId: accountId,
    assetId: assetId,
    paginationMeta: {
      pageSize: pageSize,
      firstTxHash: firstTxHash
    }
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'TRANSACTIONS_PAGE_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=TRANSACTIONS_PAGE_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = response.getTransactionsPageResponse().toObject();
    resolve(transactions);
  });
}
/**
 * getAccountAssets
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {String} args.accountId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account-assets
 */


function getAccountAssets(queryOptions, _ref7) {
  var accountId = _ref7.accountId;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getAccountAssets', {
    accountId: accountId
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'ACCOUNT_ASSETS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ACCOUNT_ASSETS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var assets = response.getAccountAssetsResponse().toObject().accountAssetsList;
    resolve(assets);
  });
}
/**
 * getAccountDetail
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {String} args.accountId
 * @property {String} args.key
 * @property {String} args.writerId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-account-detail
 */


function getAccountDetail(queryOptions, _ref8) {
  var accountId = _ref8.accountId,
      key = _ref8.key,
      writerId = _ref8.writerId;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getAccountDetail', {
    accountId: accountId
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'ACCOUNT_DETAIL_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ACCOUNT_DETAIL_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var transactions = JSON.parse(response.getAccountDetailResponse().toObject().detail);
    resolve(transactions);
  });
}
/**
 * getAssetInfo
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {String} args.assetId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-asset-info
 */


function getAssetInfo(queryOptions, _ref9) {
  var assetId = _ref9.assetId;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getAssetInfo', {
    assetId: assetId
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'ASSET_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ASSET_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var info = response.getAssetResponse().toObject().asset;
    resolve(info);
  });
}
/**
 * getRoles
 * @param {Object} queryOptions
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-roles
 */


function getRoles(queryOptions) {
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getRoles', {}), function (resolve, reject, responseName, response) {
    if (responseName !== 'ROLES_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ROLES_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var roles = response.getRolesResponse().toObject().rolesList;
    resolve(roles);
  });
}
/**
 * getRolePermissions
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {Number} args.roleId
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-role-permissions
 */


function getRolePermissions(queryOptions, _ref10) {
  var roleId = _ref10.roleId;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getRolePermissions', {
    roleId: roleId
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'ROLE_PERMISSIONS_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=ROLE_PERMISSIONS_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var permissions = response.getRolePermissionsResponse().toObject().permissionsList;
    resolve(permissions);
  });
}
/**
 * getBlock
 * @param {Object} queryOptions
 * @param {Object} args
 * @property {Number} args.height
 * @link https://iroha.readthedocs.io/en/latest/api/queries.html#get-block
 */


function getBlock(queryOptions, _ref11) {
  var height = _ref11.height;
  return sendQuery(queryOptions, _queryHelper.default.addQuery(_queryHelper.default.emptyQuery(), 'getBlock', {
    height: height
  }), function (resolve, reject, responseName, response) {
    if (responseName !== 'BLOCK_RESPONSE') {
      var error = JSON.stringify(response.toObject().errorResponse);
      return reject(new Error("Query response error: expected=BLOCK_RESPONSE, actual=".concat(responseName, "\nReason: ").concat(error)));
    }

    var block = response.getBlockResponse();
    resolve(block);
  });
}

var _default = {
  getAccount: getAccount,
  getSignatories: getSignatories,
  getTransactions: getTransactions,
  getPendingTransactions: getPendingTransactions,
  getRawPendingTransactions: getRawPendingTransactions,
  getAccountTransactions: getAccountTransactions,
  getAccountAssetTransactions: getAccountAssetTransactions,
  getAccountAssets: getAccountAssets,
  getAccountDetail: getAccountDetail,
  getAssetInfo: getAssetInfo,
  getRoles: getRoles,
  getRolePermissions: getRolePermissions,
  getBlock: getBlock
};
exports.default = _default;