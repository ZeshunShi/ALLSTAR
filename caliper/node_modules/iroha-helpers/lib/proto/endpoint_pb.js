"use strict";

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();

var transaction_pb = require('./transaction_pb.js');

var queries_pb = require('./queries_pb.js');

var qry_responses_pb = require('./qry_responses_pb.js');

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

goog.exportSymbol('proto.iroha.protocol.ToriiResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.TxList', null, global);
goog.exportSymbol('proto.iroha.protocol.TxStatus', null, global);
goog.exportSymbol('proto.iroha.protocol.TxStatusRequest', null, global);

proto.iroha.protocol.ToriiResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.ToriiResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.ToriiResponse.displayName = 'proto.iroha.protocol.ToriiResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.ToriiResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.ToriiResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.ToriiResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      txStatus: jspb.Message.getFieldWithDefault(msg, 1, 0),
      txHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
      errOrCmdName: jspb.Message.getFieldWithDefault(msg, 3, ""),
      failedCmdIndex: jspb.Message.getFieldWithDefault(msg, 4, 0),
      errorCode: jspb.Message.getFieldWithDefault(msg, 5, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.ToriiResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.ToriiResponse();
  return proto.iroha.protocol.ToriiResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.ToriiResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readEnum();
        msg.setTxStatus(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setTxHash(value);
        break;

      case 3:
        var value = reader.readString();
        msg.setErrOrCmdName(value);
        break;

      case 4:
        var value = reader.readUint64();
        msg.setFailedCmdIndex(value);
        break;

      case 5:
        var value = reader.readUint32();
        msg.setErrorCode(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.ToriiResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.ToriiResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.ToriiResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxStatus();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getTxHash();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getErrOrCmdName();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getFailedCmdIndex();

  if (f !== 0) {
    writer.writeUint64(4, f);
  }

  f = message.getErrorCode();

  if (f !== 0) {
    writer.writeUint32(5, f);
  }
};

proto.iroha.protocol.ToriiResponse.prototype.getTxStatus = function () {
  return jspb.Message.getFieldWithDefault(this, 1, 0);
};

proto.iroha.protocol.ToriiResponse.prototype.setTxStatus = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.ToriiResponse.prototype.getTxHash = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.ToriiResponse.prototype.setTxHash = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.ToriiResponse.prototype.getErrOrCmdName = function () {
  return jspb.Message.getFieldWithDefault(this, 3, "");
};

proto.iroha.protocol.ToriiResponse.prototype.setErrOrCmdName = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.ToriiResponse.prototype.getFailedCmdIndex = function () {
  return jspb.Message.getFieldWithDefault(this, 4, 0);
};

proto.iroha.protocol.ToriiResponse.prototype.setFailedCmdIndex = function (value) {
  jspb.Message.setField(this, 4, value);
};

proto.iroha.protocol.ToriiResponse.prototype.getErrorCode = function () {
  return jspb.Message.getFieldWithDefault(this, 5, 0);
};

proto.iroha.protocol.ToriiResponse.prototype.setErrorCode = function (value) {
  jspb.Message.setField(this, 5, value);
};

proto.iroha.protocol.TxStatusRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.TxStatusRequest, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.TxStatusRequest.displayName = 'proto.iroha.protocol.TxStatusRequest';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.TxStatusRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.TxStatusRequest.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.TxStatusRequest.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      txHash: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.TxStatusRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.TxStatusRequest();
  return proto.iroha.protocol.TxStatusRequest.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.TxStatusRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setTxHash(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.TxStatusRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.TxStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.TxStatusRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxHash();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

proto.iroha.protocol.TxStatusRequest.prototype.getTxHash = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.TxStatusRequest.prototype.setTxHash = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.TxList = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.TxList.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.TxList, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.TxList.displayName = 'proto.iroha.protocol.TxList';
}

proto.iroha.protocol.TxList.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.TxList.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.TxList.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.TxList.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(), transaction_pb.Transaction.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.TxList.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.TxList();
  return proto.iroha.protocol.TxList.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.TxList.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new transaction_pb.Transaction();
        reader.readMessage(value, transaction_pb.Transaction.deserializeBinaryFromReader);
        msg.addTransactions(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.TxList.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.TxList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.TxList.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransactionsList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, transaction_pb.Transaction.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.TxList.prototype.getTransactionsList = function () {
  return jspb.Message.getRepeatedWrapperField(this, transaction_pb.Transaction, 1);
};

proto.iroha.protocol.TxList.prototype.setTransactionsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

proto.iroha.protocol.TxList.prototype.addTransactions = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iroha.protocol.Transaction, opt_index);
};

proto.iroha.protocol.TxList.prototype.clearTransactionsList = function () {
  this.setTransactionsList([]);
};

proto.iroha.protocol.TxStatus = {
  STATELESS_VALIDATION_FAILED: 0,
  STATELESS_VALIDATION_SUCCESS: 1,
  STATEFUL_VALIDATION_FAILED: 2,
  STATEFUL_VALIDATION_SUCCESS: 3,
  REJECTED: 4,
  COMMITTED: 5,
  MST_EXPIRED: 6,
  NOT_RECEIVED: 7,
  MST_PENDING: 8,
  ENOUGH_SIGNATURES_COLLECTED: 9
};
goog.object.extend(exports, proto.iroha.protocol);