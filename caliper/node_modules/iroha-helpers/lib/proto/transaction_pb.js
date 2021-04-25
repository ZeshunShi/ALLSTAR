"use strict";

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();

var commands_pb = require('./commands_pb.js');

var primitive_pb = require('./primitive_pb.js');

goog.exportSymbol('proto.iroha.protocol.Transaction', null, global);
goog.exportSymbol('proto.iroha.protocol.Transaction.Payload', null, global);
goog.exportSymbol('proto.iroha.protocol.Transaction.Payload.BatchMeta', null, global);
goog.exportSymbol('proto.iroha.protocol.Transaction.Payload.BatchMeta.BatchType', null, global);
goog.exportSymbol('proto.iroha.protocol.Transaction.Payload.ReducedPayload', null, global);

proto.iroha.protocol.Transaction = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Transaction.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.Transaction, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Transaction.displayName = 'proto.iroha.protocol.Transaction';
}

proto.iroha.protocol.Transaction.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Transaction.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Transaction.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Transaction.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      payload: (f = msg.getPayload()) && proto.iroha.protocol.Transaction.Payload.toObject(includeInstance, f),
      signaturesList: jspb.Message.toObjectList(msg.getSignaturesList(), primitive_pb.Signature.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Transaction.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Transaction();
  return proto.iroha.protocol.Transaction.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Transaction.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.Transaction.Payload();
        reader.readMessage(value, proto.iroha.protocol.Transaction.Payload.deserializeBinaryFromReader);
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

proto.iroha.protocol.Transaction.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Transaction.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPayload();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.Transaction.Payload.serializeBinaryToWriter);
  }

  f = message.getSignaturesList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(2, f, primitive_pb.Signature.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.Transaction.Payload = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.Transaction.Payload.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.Transaction.Payload, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Transaction.Payload.displayName = 'proto.iroha.protocol.Transaction.Payload';
}

proto.iroha.protocol.Transaction.Payload.oneofGroups_ = [[5]];
proto.iroha.protocol.Transaction.Payload.OptionalBatchMetaCase = {
  OPTIONAL_BATCH_META_NOT_SET: 0,
  BATCH: 5
};

proto.iroha.protocol.Transaction.Payload.prototype.getOptionalBatchMetaCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.Transaction.Payload.oneofGroups_[0]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Transaction.Payload.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Transaction.Payload.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Transaction.Payload.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      reducedPayload: (f = msg.getReducedPayload()) && proto.iroha.protocol.Transaction.Payload.ReducedPayload.toObject(includeInstance, f),
      batch: (f = msg.getBatch()) && proto.iroha.protocol.Transaction.Payload.BatchMeta.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Transaction.Payload.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Transaction.Payload();
  return proto.iroha.protocol.Transaction.Payload.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Transaction.Payload.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.Transaction.Payload.ReducedPayload();
        reader.readMessage(value, proto.iroha.protocol.Transaction.Payload.ReducedPayload.deserializeBinaryFromReader);
        msg.setReducedPayload(value);
        break;

      case 5:
        var value = new proto.iroha.protocol.Transaction.Payload.BatchMeta();
        reader.readMessage(value, proto.iroha.protocol.Transaction.Payload.BatchMeta.deserializeBinaryFromReader);
        msg.setBatch(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Transaction.Payload.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Transaction.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Transaction.Payload.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getReducedPayload();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.Transaction.Payload.ReducedPayload.serializeBinaryToWriter);
  }

  f = message.getBatch();

  if (f != null) {
    writer.writeMessage(5, f, proto.iroha.protocol.Transaction.Payload.BatchMeta.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.Transaction.Payload.BatchMeta = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Transaction.Payload.BatchMeta.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.Transaction.Payload.BatchMeta, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Transaction.Payload.BatchMeta.displayName = 'proto.iroha.protocol.Transaction.Payload.BatchMeta';
}

proto.iroha.protocol.Transaction.Payload.BatchMeta.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Transaction.Payload.BatchMeta.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Transaction.Payload.BatchMeta.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Transaction.Payload.BatchMeta.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      type: jspb.Message.getFieldWithDefault(msg, 1, 0),
      reducedHashesList: jspb.Message.getRepeatedField(msg, 2)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Transaction.Payload.BatchMeta.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Transaction.Payload.BatchMeta();
  return proto.iroha.protocol.Transaction.Payload.BatchMeta.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readEnum();
        msg.setType(value);
        break;

      case 2:
        var value = reader.readString();
        msg.addReducedHashes(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Transaction.Payload.BatchMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getType();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getReducedHashesList();

  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.BatchType = {
  ATOMIC: 0,
  ORDERED: 1
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.prototype.getType = function () {
  return jspb.Message.getFieldWithDefault(this, 1, 0);
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.prototype.setType = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.prototype.getReducedHashesList = function () {
  return jspb.Message.getRepeatedField(this, 2);
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.prototype.setReducedHashesList = function (value) {
  jspb.Message.setField(this, 2, value || []);
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.prototype.addReducedHashes = function (value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

proto.iroha.protocol.Transaction.Payload.BatchMeta.prototype.clearReducedHashesList = function () {
  this.setReducedHashesList([]);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.Transaction.Payload.ReducedPayload.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.Transaction.Payload.ReducedPayload, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Transaction.Payload.ReducedPayload.displayName = 'proto.iroha.protocol.Transaction.Payload.ReducedPayload';
}

proto.iroha.protocol.Transaction.Payload.ReducedPayload.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Transaction.Payload.ReducedPayload.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Transaction.Payload.ReducedPayload.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      commandsList: jspb.Message.toObjectList(msg.getCommandsList(), commands_pb.Command.toObject, includeInstance),
      creatorAccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      createdTime: jspb.Message.getFieldWithDefault(msg, 3, 0),
      quorum: jspb.Message.getFieldWithDefault(msg, 4, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Transaction.Payload.ReducedPayload.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Transaction.Payload.ReducedPayload();
  return proto.iroha.protocol.Transaction.Payload.ReducedPayload.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new commands_pb.Command();
        reader.readMessage(value, commands_pb.Command.deserializeBinaryFromReader);
        msg.addCommands(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setCreatorAccountId(value);
        break;

      case 3:
        var value = reader.readUint64();
        msg.setCreatedTime(value);
        break;

      case 4:
        var value = reader.readUint32();
        msg.setQuorum(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Transaction.Payload.ReducedPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCommandsList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, commands_pb.Command.serializeBinaryToWriter);
  }

  f = message.getCreatorAccountId();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getCreatedTime();

  if (f !== 0) {
    writer.writeUint64(3, f);
  }

  f = message.getQuorum();

  if (f !== 0) {
    writer.writeUint32(4, f);
  }
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.getCommandsList = function () {
  return jspb.Message.getRepeatedWrapperField(this, commands_pb.Command, 1);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.setCommandsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.addCommands = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iroha.protocol.Command, opt_index);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.clearCommandsList = function () {
  this.setCommandsList([]);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.getCreatorAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.setCreatorAccountId = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.getCreatedTime = function () {
  return jspb.Message.getFieldWithDefault(this, 3, 0);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.setCreatedTime = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.getQuorum = function () {
  return jspb.Message.getFieldWithDefault(this, 4, 0);
};

proto.iroha.protocol.Transaction.Payload.ReducedPayload.prototype.setQuorum = function (value) {
  jspb.Message.setField(this, 4, value);
};

proto.iroha.protocol.Transaction.Payload.prototype.getReducedPayload = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.Transaction.Payload.ReducedPayload, 1);
};

proto.iroha.protocol.Transaction.Payload.prototype.setReducedPayload = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.Transaction.Payload.prototype.clearReducedPayload = function () {
  this.setReducedPayload(undefined);
};

proto.iroha.protocol.Transaction.Payload.prototype.hasReducedPayload = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.Transaction.Payload.prototype.getBatch = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.Transaction.Payload.BatchMeta, 5);
};

proto.iroha.protocol.Transaction.Payload.prototype.setBatch = function (value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.iroha.protocol.Transaction.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Transaction.Payload.prototype.clearBatch = function () {
  this.setBatch(undefined);
};

proto.iroha.protocol.Transaction.Payload.prototype.hasBatch = function () {
  return jspb.Message.getField(this, 5) != null;
};

proto.iroha.protocol.Transaction.prototype.getPayload = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.Transaction.Payload, 1);
};

proto.iroha.protocol.Transaction.prototype.setPayload = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.Transaction.prototype.clearPayload = function () {
  this.setPayload(undefined);
};

proto.iroha.protocol.Transaction.prototype.hasPayload = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.Transaction.prototype.getSignaturesList = function () {
  return jspb.Message.getRepeatedWrapperField(this, primitive_pb.Signature, 2);
};

proto.iroha.protocol.Transaction.prototype.setSignaturesList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};

proto.iroha.protocol.Transaction.prototype.addSignatures = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.iroha.protocol.Signature, opt_index);
};

proto.iroha.protocol.Transaction.prototype.clearSignaturesList = function () {
  this.setSignaturesList([]);
};

goog.object.extend(exports, proto.iroha.protocol);