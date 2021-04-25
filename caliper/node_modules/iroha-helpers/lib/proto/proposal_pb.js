"use strict";

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();

var transaction_pb = require('./transaction_pb.js');

goog.exportSymbol('proto.iroha.protocol.Proposal', null, global);

proto.iroha.protocol.Proposal = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Proposal.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.Proposal, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Proposal.displayName = 'proto.iroha.protocol.Proposal';
}

proto.iroha.protocol.Proposal.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Proposal.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Proposal.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Proposal.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      height: jspb.Message.getFieldWithDefault(msg, 1, 0),
      transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(), transaction_pb.Transaction.toObject, includeInstance),
      createdTime: jspb.Message.getFieldWithDefault(msg, 3, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Proposal.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Proposal();
  return proto.iroha.protocol.Proposal.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Proposal.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readUint64();
        msg.setHeight(value);
        break;

      case 2:
        var value = new transaction_pb.Transaction();
        reader.readMessage(value, transaction_pb.Transaction.deserializeBinaryFromReader);
        msg.addTransactions(value);
        break;

      case 3:
        var value = reader.readUint64();
        msg.setCreatedTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Proposal.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Proposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Proposal.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeight();

  if (f !== 0) {
    writer.writeUint64(1, f);
  }

  f = message.getTransactionsList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, transaction_pb.Transaction.serializeBinaryToWriter);
  }

  f = message.getCreatedTime();

  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

proto.iroha.protocol.Proposal.prototype.getHeight = function () {
  return jspb.Message.getFieldWithDefault(this, 1, 0);
};

proto.iroha.protocol.Proposal.prototype.setHeight = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.Proposal.prototype.getTransactionsList = function () {
  return jspb.Message.getRepeatedWrapperField(this, transaction_pb.Transaction, 2);
};

proto.iroha.protocol.Proposal.prototype.setTransactionsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};

proto.iroha.protocol.Proposal.prototype.addTransactions = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.iroha.protocol.Transaction, opt_index);
};

proto.iroha.protocol.Proposal.prototype.clearTransactionsList = function () {
  this.setTransactionsList([]);
};

proto.iroha.protocol.Proposal.prototype.getCreatedTime = function () {
  return jspb.Message.getFieldWithDefault(this, 3, 0);
};

proto.iroha.protocol.Proposal.prototype.setCreatedTime = function (value) {
  jspb.Message.setField(this, 3, value);
};

goog.object.extend(exports, proto.iroha.protocol);