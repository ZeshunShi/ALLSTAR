"use strict";

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();

var primitive_pb = require('./primitive_pb.js');

var transaction_pb = require('./transaction_pb.js');

goog.exportSymbol('proto.iroha.protocol.Block', null, global);
goog.exportSymbol('proto.iroha.protocol.Block_v1', null, global);
goog.exportSymbol('proto.iroha.protocol.Block_v1.Payload', null, global);

proto.iroha.protocol.Block_v1 = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Block_v1.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.Block_v1, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Block_v1.displayName = 'proto.iroha.protocol.Block_v1';
}

proto.iroha.protocol.Block_v1.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Block_v1.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Block_v1.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Block_v1.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      payload: (f = msg.getPayload()) && proto.iroha.protocol.Block_v1.Payload.toObject(includeInstance, f),
      signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(), primitive_pb.Signature.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Block_v1.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Block_v1();
  return proto.iroha.protocol.Block_v1.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Block_v1.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.Block_v1.Payload();
        reader.readMessage(value, proto.iroha.protocol.Block_v1.Payload.deserializeBinaryFromReader);
        msg.setPayload(value);
        break;

      case 2:
        var value = new primitive_pb.Signature();
        reader.readMessage(value, primitive_pb.Signature.deserializeBinaryFromReader);
        msg.addSignatures(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Block_v1.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Block_v1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Block_v1.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPayload();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.Block_v1.Payload.serializeBinaryToWriter);
  }

  f = message.getSignaturesList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, primitive_pb.Signature.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.Block_v1.Payload = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Block_v1.Payload.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.Block_v1.Payload, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Block_v1.Payload.displayName = 'proto.iroha.protocol.Block_v1.Payload';
}

proto.iroha.protocol.Block_v1.Payload.repeatedFields_ = [1, 6];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Block_v1.Payload.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Block_v1.Payload.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Block_v1.Payload.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(), transaction_pb.Transaction.toObject, includeInstance),
      txNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
      height: jspb.Message.getFieldWithDefault(msg, 3, 0),
      prevBlockHash: jspb.Message.getFieldWithDefault(msg, 4, ""),
      createdTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
      rejectedTransactionsHashesList: jspb.Message.getRepeatedField(msg, 6)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Block_v1.Payload.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Block_v1.Payload();
  return proto.iroha.protocol.Block_v1.Payload.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Block_v1.Payload.deserializeBinaryFromReader = function (msg, reader) {
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

      case 2:
        var value = reader.readUint32();
        msg.setTxNumber(value);
        break;

      case 3:
        var value = reader.readUint64();
        msg.setHeight(value);
        break;

      case 4:
        var value = reader.readString();
        msg.setPrevBlockHash(value);
        break;

      case 5:
        var value = reader.readUint64();
        msg.setCreatedTime(value);
        break;

      case 6:
        var value = reader.readString();
        msg.addRejectedTransactionsHashes(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Block_v1.Payload.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Block_v1.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Block_v1.Payload.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransactionsList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, transaction_pb.Transaction.serializeBinaryToWriter);
  }

  f = message.getTxNumber();

  if (f !== 0) {
    writer.writeUint32(2, f);
  }

  f = message.getHeight();

  if (f !== 0) {
    writer.writeUint64(3, f);
  }

  f = message.getPrevBlockHash();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getCreatedTime();

  if (f !== 0) {
    writer.writeUint64(5, f);
  }

  f = message.getRejectedTransactionsHashesList();

  if (f.length > 0) {
    writer.writeRepeatedString(6, f);
  }
};

proto.iroha.protocol.Block_v1.Payload.prototype.getTransactionsList = function () {
  return jspb.Message.getRepeatedWrapperField(this, transaction_pb.Transaction, 1);
};

proto.iroha.protocol.Block_v1.Payload.prototype.setTransactionsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

proto.iroha.protocol.Block_v1.Payload.prototype.addTransactions = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iroha.protocol.Transaction, opt_index);
};

proto.iroha.protocol.Block_v1.Payload.prototype.clearTransactionsList = function () {
  this.setTransactionsList([]);
};

proto.iroha.protocol.Block_v1.Payload.prototype.getTxNumber = function () {
  return jspb.Message.getFieldWithDefault(this, 2, 0);
};

proto.iroha.protocol.Block_v1.Payload.prototype.setTxNumber = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.Block_v1.Payload.prototype.getHeight = function () {
  return jspb.Message.getFieldWithDefault(this, 3, 0);
};

proto.iroha.protocol.Block_v1.Payload.prototype.setHeight = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.Block_v1.Payload.prototype.getPrevBlockHash = function () {
  return jspb.Message.getFieldWithDefault(this, 4, "");
};

proto.iroha.protocol.Block_v1.Payload.prototype.setPrevBlockHash = function (value) {
  jspb.Message.setField(this, 4, value);
};

proto.iroha.protocol.Block_v1.Payload.prototype.getCreatedTime = function () {
  return jspb.Message.getFieldWithDefault(this, 5, 0);
};

proto.iroha.protocol.Block_v1.Payload.prototype.setCreatedTime = function (value) {
  jspb.Message.setField(this, 5, value);
};

proto.iroha.protocol.Block_v1.Payload.prototype.getRejectedTransactionsHashesList = function () {
  return jspb.Message.getRepeatedField(this, 6);
};

proto.iroha.protocol.Block_v1.Payload.prototype.setRejectedTransactionsHashesList = function (value) {
  jspb.Message.setField(this, 6, value || []);
};

proto.iroha.protocol.Block_v1.Payload.prototype.addRejectedTransactionsHashes = function (value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};

proto.iroha.protocol.Block_v1.Payload.prototype.clearRejectedTransactionsHashesList = function () {
  this.setRejectedTransactionsHashesList([]);
};

proto.iroha.protocol.Block_v1.prototype.getPayload = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.Block_v1.Payload, 1);
};

proto.iroha.protocol.Block_v1.prototype.setPayload = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.Block_v1.prototype.clearPayload = function () {
  this.setPayload(undefined);
};

proto.iroha.protocol.Block_v1.prototype.hasPayload = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.Block_v1.prototype.getSignaturesList = function () {
  return jspb.Message.getRepeatedWrapperField(this, primitive_pb.Signature, 2);
};

proto.iroha.protocol.Block_v1.prototype.setSignaturesList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};

proto.iroha.protocol.Block_v1.prototype.addSignatures = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.iroha.protocol.Signature, opt_index);
};

proto.iroha.protocol.Block_v1.prototype.clearSignaturesList = function () {
  this.setSignaturesList([]);
};

proto.iroha.protocol.Block = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.Block.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.Block, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Block.displayName = 'proto.iroha.protocol.Block';
}

proto.iroha.protocol.Block.oneofGroups_ = [[1]];
proto.iroha.protocol.Block.BlockVersionCase = {
  BLOCK_VERSION_NOT_SET: 0,
  BLOCK_V1: 1
};

proto.iroha.protocol.Block.prototype.getBlockVersionCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.Block.oneofGroups_[0]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Block.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Block.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Block.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      blockV1: (f = msg.getBlockV1()) && proto.iroha.protocol.Block_v1.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Block.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Block();
  return proto.iroha.protocol.Block.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Block.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.Block_v1();
        reader.readMessage(value, proto.iroha.protocol.Block_v1.deserializeBinaryFromReader);
        msg.setBlockV1(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Block.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Block.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBlockV1();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.Block_v1.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.Block.prototype.getBlockV1 = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.Block_v1, 1);
};

proto.iroha.protocol.Block.prototype.setBlockV1 = function (value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.iroha.protocol.Block.oneofGroups_[0], value);
};

proto.iroha.protocol.Block.prototype.clearBlockV1 = function () {
  this.setBlockV1(undefined);
};

proto.iroha.protocol.Block.prototype.hasBlockV1 = function () {
  return jspb.Message.getField(this, 1) != null;
};

goog.object.extend(exports, proto.iroha.protocol);