"use strict";

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();

var primitive_pb = require('./primitive_pb.js');

goog.exportSymbol('proto.iroha.protocol.BlocksQuery', null, global);
goog.exportSymbol('proto.iroha.protocol.GetAccount', null, global);
goog.exportSymbol('proto.iroha.protocol.GetAccountAssetTransactions', null, global);
goog.exportSymbol('proto.iroha.protocol.GetAccountAssets', null, global);
goog.exportSymbol('proto.iroha.protocol.GetAccountDetail', null, global);
goog.exportSymbol('proto.iroha.protocol.GetAccountTransactions', null, global);
goog.exportSymbol('proto.iroha.protocol.GetAssetInfo', null, global);
goog.exportSymbol('proto.iroha.protocol.GetBlock', null, global);
goog.exportSymbol('proto.iroha.protocol.GetPendingTransactions', null, global);
goog.exportSymbol('proto.iroha.protocol.GetRolePermissions', null, global);
goog.exportSymbol('proto.iroha.protocol.GetRoles', null, global);
goog.exportSymbol('proto.iroha.protocol.GetSignatories', null, global);
goog.exportSymbol('proto.iroha.protocol.GetTransactions', null, global);
goog.exportSymbol('proto.iroha.protocol.Query', null, global);
goog.exportSymbol('proto.iroha.protocol.Query.Payload', null, global);
goog.exportSymbol('proto.iroha.protocol.QueryPayloadMeta', null, global);
goog.exportSymbol('proto.iroha.protocol.TxPaginationMeta', null, global);

proto.iroha.protocol.TxPaginationMeta = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.TxPaginationMeta.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.TxPaginationMeta, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.TxPaginationMeta.displayName = 'proto.iroha.protocol.TxPaginationMeta';
}

proto.iroha.protocol.TxPaginationMeta.oneofGroups_ = [[2]];
proto.iroha.protocol.TxPaginationMeta.OptFirstTxHashCase = {
  OPT_FIRST_TX_HASH_NOT_SET: 0,
  FIRST_TX_HASH: 2
};

proto.iroha.protocol.TxPaginationMeta.prototype.getOptFirstTxHashCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.TxPaginationMeta.oneofGroups_[0]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.TxPaginationMeta.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.TxPaginationMeta.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.TxPaginationMeta.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
      firstTxHash: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.TxPaginationMeta.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.TxPaginationMeta();
  return proto.iroha.protocol.TxPaginationMeta.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.TxPaginationMeta.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readUint32();
        msg.setPageSize(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setFirstTxHash(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.TxPaginationMeta.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.TxPaginationMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.TxPaginationMeta.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPageSize();

  if (f !== 0) {
    writer.writeUint32(1, f);
  }

  f = jspb.Message.getField(message, 2);

  if (f != null) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.TxPaginationMeta.prototype.getPageSize = function () {
  return jspb.Message.getFieldWithDefault(this, 1, 0);
};

proto.iroha.protocol.TxPaginationMeta.prototype.setPageSize = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.TxPaginationMeta.prototype.getFirstTxHash = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.TxPaginationMeta.prototype.setFirstTxHash = function (value) {
  jspb.Message.setOneofField(this, 2, proto.iroha.protocol.TxPaginationMeta.oneofGroups_[0], value);
};

proto.iroha.protocol.TxPaginationMeta.prototype.clearFirstTxHash = function () {
  jspb.Message.setOneofField(this, 2, proto.iroha.protocol.TxPaginationMeta.oneofGroups_[0], undefined);
};

proto.iroha.protocol.TxPaginationMeta.prototype.hasFirstTxHash = function () {
  return jspb.Message.getField(this, 2) != null;
};

proto.iroha.protocol.GetAccount = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetAccount, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetAccount.displayName = 'proto.iroha.protocol.GetAccount';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetAccount.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetAccount.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetAccount.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetAccount.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetAccount();
  return proto.iroha.protocol.GetAccount.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetAccount.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAccountId(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetAccount.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetAccount.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

proto.iroha.protocol.GetAccount.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.GetAccount.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.GetBlock = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetBlock, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetBlock.displayName = 'proto.iroha.protocol.GetBlock';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetBlock.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetBlock.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetBlock.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      height: jspb.Message.getFieldWithDefault(msg, 1, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetBlock.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetBlock();
  return proto.iroha.protocol.GetBlock.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetBlock.deserializeBinaryFromReader = function (msg, reader) {
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

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetBlock.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetBlock.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getHeight();

  if (f !== 0) {
    writer.writeUint64(1, f);
  }
};

proto.iroha.protocol.GetBlock.prototype.getHeight = function () {
  return jspb.Message.getFieldWithDefault(this, 1, 0);
};

proto.iroha.protocol.GetBlock.prototype.setHeight = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.GetSignatories = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetSignatories, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetSignatories.displayName = 'proto.iroha.protocol.GetSignatories';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetSignatories.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetSignatories.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetSignatories.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetSignatories.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetSignatories();
  return proto.iroha.protocol.GetSignatories.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetSignatories.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAccountId(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetSignatories.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetSignatories.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetSignatories.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

proto.iroha.protocol.GetSignatories.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.GetSignatories.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.GetAccountTransactions = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetAccountTransactions, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetAccountTransactions.displayName = 'proto.iroha.protocol.GetAccountTransactions';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetAccountTransactions.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetAccountTransactions.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetAccountTransactions.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      paginationMeta: (f = msg.getPaginationMeta()) && proto.iroha.protocol.TxPaginationMeta.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetAccountTransactions.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetAccountTransactions();
  return proto.iroha.protocol.GetAccountTransactions.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetAccountTransactions.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAccountId(value);
        break;

      case 2:
        var value = new proto.iroha.protocol.TxPaginationMeta();
        reader.readMessage(value, proto.iroha.protocol.TxPaginationMeta.deserializeBinaryFromReader);
        msg.setPaginationMeta(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetAccountTransactions.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetAccountTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetAccountTransactions.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getPaginationMeta();

  if (f != null) {
    writer.writeMessage(2, f, proto.iroha.protocol.TxPaginationMeta.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.GetAccountTransactions.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.GetAccountTransactions.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.GetAccountTransactions.prototype.getPaginationMeta = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.TxPaginationMeta, 2);
};

proto.iroha.protocol.GetAccountTransactions.prototype.setPaginationMeta = function (value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.iroha.protocol.GetAccountTransactions.prototype.clearPaginationMeta = function () {
  this.setPaginationMeta(undefined);
};

proto.iroha.protocol.GetAccountTransactions.prototype.hasPaginationMeta = function () {
  return jspb.Message.getField(this, 2) != null;
};

proto.iroha.protocol.GetAccountAssetTransactions = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetAccountAssetTransactions, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetAccountAssetTransactions.displayName = 'proto.iroha.protocol.GetAccountAssetTransactions';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetAccountAssetTransactions.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetAccountAssetTransactions.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetAccountAssetTransactions.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      assetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      paginationMeta: (f = msg.getPaginationMeta()) && proto.iroha.protocol.TxPaginationMeta.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetAccountAssetTransactions.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetAccountAssetTransactions();
  return proto.iroha.protocol.GetAccountAssetTransactions.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetAccountAssetTransactions.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAccountId(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setAssetId(value);
        break;

      case 3:
        var value = new proto.iroha.protocol.TxPaginationMeta();
        reader.readMessage(value, proto.iroha.protocol.TxPaginationMeta.deserializeBinaryFromReader);
        msg.setPaginationMeta(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetAccountAssetTransactions.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetAccountAssetTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetAccountAssetTransactions.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getAssetId();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getPaginationMeta();

  if (f != null) {
    writer.writeMessage(3, f, proto.iroha.protocol.TxPaginationMeta.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.GetAccountAssetTransactions.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.GetAccountAssetTransactions.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.GetAccountAssetTransactions.prototype.getAssetId = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.GetAccountAssetTransactions.prototype.setAssetId = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.GetAccountAssetTransactions.prototype.getPaginationMeta = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.TxPaginationMeta, 3);
};

proto.iroha.protocol.GetAccountAssetTransactions.prototype.setPaginationMeta = function (value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.iroha.protocol.GetAccountAssetTransactions.prototype.clearPaginationMeta = function () {
  this.setPaginationMeta(undefined);
};

proto.iroha.protocol.GetAccountAssetTransactions.prototype.hasPaginationMeta = function () {
  return jspb.Message.getField(this, 3) != null;
};

proto.iroha.protocol.GetTransactions = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.GetTransactions.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.GetTransactions, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetTransactions.displayName = 'proto.iroha.protocol.GetTransactions';
}

proto.iroha.protocol.GetTransactions.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetTransactions.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetTransactions.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetTransactions.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      txHashesList: jspb.Message.getRepeatedField(msg, 1)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetTransactions.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetTransactions();
  return proto.iroha.protocol.GetTransactions.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetTransactions.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.addTxHashes(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetTransactions.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetTransactions.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxHashesList();

  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
};

proto.iroha.protocol.GetTransactions.prototype.getTxHashesList = function () {
  return jspb.Message.getRepeatedField(this, 1);
};

proto.iroha.protocol.GetTransactions.prototype.setTxHashesList = function (value) {
  jspb.Message.setField(this, 1, value || []);
};

proto.iroha.protocol.GetTransactions.prototype.addTxHashes = function (value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

proto.iroha.protocol.GetTransactions.prototype.clearTxHashesList = function () {
  this.setTxHashesList([]);
};

proto.iroha.protocol.GetAccountAssets = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetAccountAssets, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetAccountAssets.displayName = 'proto.iroha.protocol.GetAccountAssets';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetAccountAssets.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetAccountAssets.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetAccountAssets.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetAccountAssets.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetAccountAssets();
  return proto.iroha.protocol.GetAccountAssets.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetAccountAssets.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAccountId(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetAccountAssets.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetAccountAssets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetAccountAssets.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

proto.iroha.protocol.GetAccountAssets.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.GetAccountAssets.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.GetAccountDetail = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.GetAccountDetail.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.GetAccountDetail, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetAccountDetail.displayName = 'proto.iroha.protocol.GetAccountDetail';
}

proto.iroha.protocol.GetAccountDetail.oneofGroups_ = [[1], [2], [3]];
proto.iroha.protocol.GetAccountDetail.OptAccountIdCase = {
  OPT_ACCOUNT_ID_NOT_SET: 0,
  ACCOUNT_ID: 1
};

proto.iroha.protocol.GetAccountDetail.prototype.getOptAccountIdCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.GetAccountDetail.oneofGroups_[0]);
};

proto.iroha.protocol.GetAccountDetail.OptKeyCase = {
  OPT_KEY_NOT_SET: 0,
  KEY: 2
};

proto.iroha.protocol.GetAccountDetail.prototype.getOptKeyCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.GetAccountDetail.oneofGroups_[1]);
};

proto.iroha.protocol.GetAccountDetail.OptWriterCase = {
  OPT_WRITER_NOT_SET: 0,
  WRITER: 3
};

proto.iroha.protocol.GetAccountDetail.prototype.getOptWriterCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.GetAccountDetail.oneofGroups_[2]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetAccountDetail.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetAccountDetail.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetAccountDetail.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      key: jspb.Message.getFieldWithDefault(msg, 2, ""),
      writer: jspb.Message.getFieldWithDefault(msg, 3, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetAccountDetail.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetAccountDetail();
  return proto.iroha.protocol.GetAccountDetail.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetAccountDetail.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAccountId(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setKey(value);
        break;

      case 3:
        var value = reader.readString();
        msg.setWriter(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetAccountDetail.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetAccountDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetAccountDetail.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = jspb.Message.getField(message, 1);

  if (f != null) {
    writer.writeString(1, f);
  }

  f = jspb.Message.getField(message, 2);

  if (f != null) {
    writer.writeString(2, f);
  }

  f = jspb.Message.getField(message, 3);

  if (f != null) {
    writer.writeString(3, f);
  }
};

proto.iroha.protocol.GetAccountDetail.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.GetAccountDetail.prototype.setAccountId = function (value) {
  jspb.Message.setOneofField(this, 1, proto.iroha.protocol.GetAccountDetail.oneofGroups_[0], value);
};

proto.iroha.protocol.GetAccountDetail.prototype.clearAccountId = function () {
  jspb.Message.setOneofField(this, 1, proto.iroha.protocol.GetAccountDetail.oneofGroups_[0], undefined);
};

proto.iroha.protocol.GetAccountDetail.prototype.hasAccountId = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.GetAccountDetail.prototype.getKey = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.GetAccountDetail.prototype.setKey = function (value) {
  jspb.Message.setOneofField(this, 2, proto.iroha.protocol.GetAccountDetail.oneofGroups_[1], value);
};

proto.iroha.protocol.GetAccountDetail.prototype.clearKey = function () {
  jspb.Message.setOneofField(this, 2, proto.iroha.protocol.GetAccountDetail.oneofGroups_[1], undefined);
};

proto.iroha.protocol.GetAccountDetail.prototype.hasKey = function () {
  return jspb.Message.getField(this, 2) != null;
};

proto.iroha.protocol.GetAccountDetail.prototype.getWriter = function () {
  return jspb.Message.getFieldWithDefault(this, 3, "");
};

proto.iroha.protocol.GetAccountDetail.prototype.setWriter = function (value) {
  jspb.Message.setOneofField(this, 3, proto.iroha.protocol.GetAccountDetail.oneofGroups_[2], value);
};

proto.iroha.protocol.GetAccountDetail.prototype.clearWriter = function () {
  jspb.Message.setOneofField(this, 3, proto.iroha.protocol.GetAccountDetail.oneofGroups_[2], undefined);
};

proto.iroha.protocol.GetAccountDetail.prototype.hasWriter = function () {
  return jspb.Message.getField(this, 3) != null;
};

proto.iroha.protocol.GetAssetInfo = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetAssetInfo, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetAssetInfo.displayName = 'proto.iroha.protocol.GetAssetInfo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetAssetInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetAssetInfo.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetAssetInfo.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      assetId: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetAssetInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetAssetInfo();
  return proto.iroha.protocol.GetAssetInfo.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetAssetInfo.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAssetId(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetAssetInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetAssetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetAssetInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAssetId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

proto.iroha.protocol.GetAssetInfo.prototype.getAssetId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.GetAssetInfo.prototype.setAssetId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.GetRoles = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetRoles, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetRoles.displayName = 'proto.iroha.protocol.GetRoles';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetRoles.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetRoles.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetRoles.toObject = function (includeInstance, msg) {
    var f,
        obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetRoles.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetRoles();
  return proto.iroha.protocol.GetRoles.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetRoles.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetRoles.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetRoles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetRoles.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

proto.iroha.protocol.GetRolePermissions = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetRolePermissions, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetRolePermissions.displayName = 'proto.iroha.protocol.GetRolePermissions';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetRolePermissions.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetRolePermissions.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetRolePermissions.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      roleId: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetRolePermissions.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetRolePermissions();
  return proto.iroha.protocol.GetRolePermissions.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetRolePermissions.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setRoleId(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetRolePermissions.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetRolePermissions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetRolePermissions.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRoleId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

proto.iroha.protocol.GetRolePermissions.prototype.getRoleId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.GetRolePermissions.prototype.setRoleId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.GetPendingTransactions = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GetPendingTransactions, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GetPendingTransactions.displayName = 'proto.iroha.protocol.GetPendingTransactions';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GetPendingTransactions.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GetPendingTransactions.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GetPendingTransactions.toObject = function (includeInstance, msg) {
    var f,
        obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GetPendingTransactions.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GetPendingTransactions();
  return proto.iroha.protocol.GetPendingTransactions.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GetPendingTransactions.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GetPendingTransactions.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GetPendingTransactions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GetPendingTransactions.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};

proto.iroha.protocol.QueryPayloadMeta = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.QueryPayloadMeta, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.QueryPayloadMeta.displayName = 'proto.iroha.protocol.QueryPayloadMeta';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.QueryPayloadMeta.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.QueryPayloadMeta.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.QueryPayloadMeta.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      createdTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
      creatorAccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      queryCounter: jspb.Message.getFieldWithDefault(msg, 3, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.QueryPayloadMeta.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.QueryPayloadMeta();
  return proto.iroha.protocol.QueryPayloadMeta.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.QueryPayloadMeta.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readUint64();
        msg.setCreatedTime(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setCreatorAccountId(value);
        break;

      case 3:
        var value = reader.readUint64();
        msg.setQueryCounter(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.QueryPayloadMeta.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.QueryPayloadMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.QueryPayloadMeta.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCreatedTime();

  if (f !== 0) {
    writer.writeUint64(1, f);
  }

  f = message.getCreatorAccountId();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getQueryCounter();

  if (f !== 0) {
    writer.writeUint64(3, f);
  }
};

proto.iroha.protocol.QueryPayloadMeta.prototype.getCreatedTime = function () {
  return jspb.Message.getFieldWithDefault(this, 1, 0);
};

proto.iroha.protocol.QueryPayloadMeta.prototype.setCreatedTime = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.QueryPayloadMeta.prototype.getCreatorAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.QueryPayloadMeta.prototype.setCreatorAccountId = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.QueryPayloadMeta.prototype.getQueryCounter = function () {
  return jspb.Message.getFieldWithDefault(this, 3, 0);
};

proto.iroha.protocol.QueryPayloadMeta.prototype.setQueryCounter = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.Query = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.Query, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Query.displayName = 'proto.iroha.protocol.Query';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Query.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Query.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Query.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      payload: (f = msg.getPayload()) && proto.iroha.protocol.Query.Payload.toObject(includeInstance, f),
      signature: (f = msg.getSignature()) && primitive_pb.Signature.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Query.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Query();
  return proto.iroha.protocol.Query.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Query.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.Query.Payload();
        reader.readMessage(value, proto.iroha.protocol.Query.Payload.deserializeBinaryFromReader);
        msg.setPayload(value);
        break;

      case 2:
        var value = new primitive_pb.Signature();
        reader.readMessage(value, primitive_pb.Signature.deserializeBinaryFromReader);
        msg.setSignature(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Query.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Query.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Query.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPayload();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.Query.Payload.serializeBinaryToWriter);
  }

  f = message.getSignature();

  if (f != null) {
    writer.writeMessage(2, f, primitive_pb.Signature.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.Query.Payload = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.Query.Payload.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.Query.Payload, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Query.Payload.displayName = 'proto.iroha.protocol.Query.Payload';
}

proto.iroha.protocol.Query.Payload.oneofGroups_ = [[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];
proto.iroha.protocol.Query.Payload.QueryCase = {
  QUERY_NOT_SET: 0,
  GET_ACCOUNT: 3,
  GET_SIGNATORIES: 4,
  GET_ACCOUNT_TRANSACTIONS: 5,
  GET_ACCOUNT_ASSET_TRANSACTIONS: 6,
  GET_TRANSACTIONS: 7,
  GET_ACCOUNT_ASSETS: 8,
  GET_ACCOUNT_DETAIL: 9,
  GET_ROLES: 10,
  GET_ROLE_PERMISSIONS: 11,
  GET_ASSET_INFO: 12,
  GET_PENDING_TRANSACTIONS: 13,
  GET_BLOCK: 14
};

proto.iroha.protocol.Query.Payload.prototype.getQueryCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.Query.Payload.oneofGroups_[0]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Query.Payload.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Query.Payload.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Query.Payload.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      meta: (f = msg.getMeta()) && proto.iroha.protocol.QueryPayloadMeta.toObject(includeInstance, f),
      getAccount: (f = msg.getGetAccount()) && proto.iroha.protocol.GetAccount.toObject(includeInstance, f),
      getSignatories: (f = msg.getGetSignatories()) && proto.iroha.protocol.GetSignatories.toObject(includeInstance, f),
      getAccountTransactions: (f = msg.getGetAccountTransactions()) && proto.iroha.protocol.GetAccountTransactions.toObject(includeInstance, f),
      getAccountAssetTransactions: (f = msg.getGetAccountAssetTransactions()) && proto.iroha.protocol.GetAccountAssetTransactions.toObject(includeInstance, f),
      getTransactions: (f = msg.getGetTransactions()) && proto.iroha.protocol.GetTransactions.toObject(includeInstance, f),
      getAccountAssets: (f = msg.getGetAccountAssets()) && proto.iroha.protocol.GetAccountAssets.toObject(includeInstance, f),
      getAccountDetail: (f = msg.getGetAccountDetail()) && proto.iroha.protocol.GetAccountDetail.toObject(includeInstance, f),
      getRoles: (f = msg.getGetRoles()) && proto.iroha.protocol.GetRoles.toObject(includeInstance, f),
      getRolePermissions: (f = msg.getGetRolePermissions()) && proto.iroha.protocol.GetRolePermissions.toObject(includeInstance, f),
      getAssetInfo: (f = msg.getGetAssetInfo()) && proto.iroha.protocol.GetAssetInfo.toObject(includeInstance, f),
      getPendingTransactions: (f = msg.getGetPendingTransactions()) && proto.iroha.protocol.GetPendingTransactions.toObject(includeInstance, f),
      getBlock: (f = msg.getGetBlock()) && proto.iroha.protocol.GetBlock.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Query.Payload.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Query.Payload();
  return proto.iroha.protocol.Query.Payload.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Query.Payload.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.QueryPayloadMeta();
        reader.readMessage(value, proto.iroha.protocol.QueryPayloadMeta.deserializeBinaryFromReader);
        msg.setMeta(value);
        break;

      case 3:
        var value = new proto.iroha.protocol.GetAccount();
        reader.readMessage(value, proto.iroha.protocol.GetAccount.deserializeBinaryFromReader);
        msg.setGetAccount(value);
        break;

      case 4:
        var value = new proto.iroha.protocol.GetSignatories();
        reader.readMessage(value, proto.iroha.protocol.GetSignatories.deserializeBinaryFromReader);
        msg.setGetSignatories(value);
        break;

      case 5:
        var value = new proto.iroha.protocol.GetAccountTransactions();
        reader.readMessage(value, proto.iroha.protocol.GetAccountTransactions.deserializeBinaryFromReader);
        msg.setGetAccountTransactions(value);
        break;

      case 6:
        var value = new proto.iroha.protocol.GetAccountAssetTransactions();
        reader.readMessage(value, proto.iroha.protocol.GetAccountAssetTransactions.deserializeBinaryFromReader);
        msg.setGetAccountAssetTransactions(value);
        break;

      case 7:
        var value = new proto.iroha.protocol.GetTransactions();
        reader.readMessage(value, proto.iroha.protocol.GetTransactions.deserializeBinaryFromReader);
        msg.setGetTransactions(value);
        break;

      case 8:
        var value = new proto.iroha.protocol.GetAccountAssets();
        reader.readMessage(value, proto.iroha.protocol.GetAccountAssets.deserializeBinaryFromReader);
        msg.setGetAccountAssets(value);
        break;

      case 9:
        var value = new proto.iroha.protocol.GetAccountDetail();
        reader.readMessage(value, proto.iroha.protocol.GetAccountDetail.deserializeBinaryFromReader);
        msg.setGetAccountDetail(value);
        break;

      case 10:
        var value = new proto.iroha.protocol.GetRoles();
        reader.readMessage(value, proto.iroha.protocol.GetRoles.deserializeBinaryFromReader);
        msg.setGetRoles(value);
        break;

      case 11:
        var value = new proto.iroha.protocol.GetRolePermissions();
        reader.readMessage(value, proto.iroha.protocol.GetRolePermissions.deserializeBinaryFromReader);
        msg.setGetRolePermissions(value);
        break;

      case 12:
        var value = new proto.iroha.protocol.GetAssetInfo();
        reader.readMessage(value, proto.iroha.protocol.GetAssetInfo.deserializeBinaryFromReader);
        msg.setGetAssetInfo(value);
        break;

      case 13:
        var value = new proto.iroha.protocol.GetPendingTransactions();
        reader.readMessage(value, proto.iroha.protocol.GetPendingTransactions.deserializeBinaryFromReader);
        msg.setGetPendingTransactions(value);
        break;

      case 14:
        var value = new proto.iroha.protocol.GetBlock();
        reader.readMessage(value, proto.iroha.protocol.GetBlock.deserializeBinaryFromReader);
        msg.setGetBlock(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Query.Payload.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Query.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Query.Payload.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMeta();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.QueryPayloadMeta.serializeBinaryToWriter);
  }

  f = message.getGetAccount();

  if (f != null) {
    writer.writeMessage(3, f, proto.iroha.protocol.GetAccount.serializeBinaryToWriter);
  }

  f = message.getGetSignatories();

  if (f != null) {
    writer.writeMessage(4, f, proto.iroha.protocol.GetSignatories.serializeBinaryToWriter);
  }

  f = message.getGetAccountTransactions();

  if (f != null) {
    writer.writeMessage(5, f, proto.iroha.protocol.GetAccountTransactions.serializeBinaryToWriter);
  }

  f = message.getGetAccountAssetTransactions();

  if (f != null) {
    writer.writeMessage(6, f, proto.iroha.protocol.GetAccountAssetTransactions.serializeBinaryToWriter);
  }

  f = message.getGetTransactions();

  if (f != null) {
    writer.writeMessage(7, f, proto.iroha.protocol.GetTransactions.serializeBinaryToWriter);
  }

  f = message.getGetAccountAssets();

  if (f != null) {
    writer.writeMessage(8, f, proto.iroha.protocol.GetAccountAssets.serializeBinaryToWriter);
  }

  f = message.getGetAccountDetail();

  if (f != null) {
    writer.writeMessage(9, f, proto.iroha.protocol.GetAccountDetail.serializeBinaryToWriter);
  }

  f = message.getGetRoles();

  if (f != null) {
    writer.writeMessage(10, f, proto.iroha.protocol.GetRoles.serializeBinaryToWriter);
  }

  f = message.getGetRolePermissions();

  if (f != null) {
    writer.writeMessage(11, f, proto.iroha.protocol.GetRolePermissions.serializeBinaryToWriter);
  }

  f = message.getGetAssetInfo();

  if (f != null) {
    writer.writeMessage(12, f, proto.iroha.protocol.GetAssetInfo.serializeBinaryToWriter);
  }

  f = message.getGetPendingTransactions();

  if (f != null) {
    writer.writeMessage(13, f, proto.iroha.protocol.GetPendingTransactions.serializeBinaryToWriter);
  }

  f = message.getGetBlock();

  if (f != null) {
    writer.writeMessage(14, f, proto.iroha.protocol.GetBlock.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.Query.Payload.prototype.getMeta = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.QueryPayloadMeta, 1);
};

proto.iroha.protocol.Query.Payload.prototype.setMeta = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.Query.Payload.prototype.clearMeta = function () {
  this.setMeta(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasMeta = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetAccount = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetAccount, 3);
};

proto.iroha.protocol.Query.Payload.prototype.setGetAccount = function (value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetAccount = function () {
  this.setGetAccount(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetAccount = function () {
  return jspb.Message.getField(this, 3) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetSignatories = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetSignatories, 4);
};

proto.iroha.protocol.Query.Payload.prototype.setGetSignatories = function (value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetSignatories = function () {
  this.setGetSignatories(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetSignatories = function () {
  return jspb.Message.getField(this, 4) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetAccountTransactions = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetAccountTransactions, 5);
};

proto.iroha.protocol.Query.Payload.prototype.setGetAccountTransactions = function (value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetAccountTransactions = function () {
  this.setGetAccountTransactions(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetAccountTransactions = function () {
  return jspb.Message.getField(this, 5) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetAccountAssetTransactions = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetAccountAssetTransactions, 6);
};

proto.iroha.protocol.Query.Payload.prototype.setGetAccountAssetTransactions = function (value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetAccountAssetTransactions = function () {
  this.setGetAccountAssetTransactions(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetAccountAssetTransactions = function () {
  return jspb.Message.getField(this, 6) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetTransactions = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetTransactions, 7);
};

proto.iroha.protocol.Query.Payload.prototype.setGetTransactions = function (value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetTransactions = function () {
  this.setGetTransactions(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetTransactions = function () {
  return jspb.Message.getField(this, 7) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetAccountAssets = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetAccountAssets, 8);
};

proto.iroha.protocol.Query.Payload.prototype.setGetAccountAssets = function (value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetAccountAssets = function () {
  this.setGetAccountAssets(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetAccountAssets = function () {
  return jspb.Message.getField(this, 8) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetAccountDetail = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetAccountDetail, 9);
};

proto.iroha.protocol.Query.Payload.prototype.setGetAccountDetail = function (value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetAccountDetail = function () {
  this.setGetAccountDetail(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetAccountDetail = function () {
  return jspb.Message.getField(this, 9) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetRoles = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetRoles, 10);
};

proto.iroha.protocol.Query.Payload.prototype.setGetRoles = function (value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetRoles = function () {
  this.setGetRoles(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetRoles = function () {
  return jspb.Message.getField(this, 10) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetRolePermissions = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetRolePermissions, 11);
};

proto.iroha.protocol.Query.Payload.prototype.setGetRolePermissions = function (value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetRolePermissions = function () {
  this.setGetRolePermissions(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetRolePermissions = function () {
  return jspb.Message.getField(this, 11) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetAssetInfo = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetAssetInfo, 12);
};

proto.iroha.protocol.Query.Payload.prototype.setGetAssetInfo = function (value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetAssetInfo = function () {
  this.setGetAssetInfo(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetAssetInfo = function () {
  return jspb.Message.getField(this, 12) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetPendingTransactions = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetPendingTransactions, 13);
};

proto.iroha.protocol.Query.Payload.prototype.setGetPendingTransactions = function (value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetPendingTransactions = function () {
  this.setGetPendingTransactions(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetPendingTransactions = function () {
  return jspb.Message.getField(this, 13) != null;
};

proto.iroha.protocol.Query.Payload.prototype.getGetBlock = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GetBlock, 14);
};

proto.iroha.protocol.Query.Payload.prototype.setGetBlock = function (value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.iroha.protocol.Query.Payload.oneofGroups_[0], value);
};

proto.iroha.protocol.Query.Payload.prototype.clearGetBlock = function () {
  this.setGetBlock(undefined);
};

proto.iroha.protocol.Query.Payload.prototype.hasGetBlock = function () {
  return jspb.Message.getField(this, 14) != null;
};

proto.iroha.protocol.Query.prototype.getPayload = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.Query.Payload, 1);
};

proto.iroha.protocol.Query.prototype.setPayload = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.Query.prototype.clearPayload = function () {
  this.setPayload(undefined);
};

proto.iroha.protocol.Query.prototype.hasPayload = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.Query.prototype.getSignature = function () {
  return jspb.Message.getWrapperField(this, primitive_pb.Signature, 2);
};

proto.iroha.protocol.Query.prototype.setSignature = function (value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.iroha.protocol.Query.prototype.clearSignature = function () {
  this.setSignature(undefined);
};

proto.iroha.protocol.Query.prototype.hasSignature = function () {
  return jspb.Message.getField(this, 2) != null;
};

proto.iroha.protocol.BlocksQuery = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.BlocksQuery, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.BlocksQuery.displayName = 'proto.iroha.protocol.BlocksQuery';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.BlocksQuery.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.BlocksQuery.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.BlocksQuery.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      meta: (f = msg.getMeta()) && proto.iroha.protocol.QueryPayloadMeta.toObject(includeInstance, f),
      signature: (f = msg.getSignature()) && primitive_pb.Signature.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.BlocksQuery.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.BlocksQuery();
  return proto.iroha.protocol.BlocksQuery.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.BlocksQuery.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.QueryPayloadMeta();
        reader.readMessage(value, proto.iroha.protocol.QueryPayloadMeta.deserializeBinaryFromReader);
        msg.setMeta(value);
        break;

      case 2:
        var value = new primitive_pb.Signature();
        reader.readMessage(value, primitive_pb.Signature.deserializeBinaryFromReader);
        msg.setSignature(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.BlocksQuery.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.BlocksQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.BlocksQuery.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMeta();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.QueryPayloadMeta.serializeBinaryToWriter);
  }

  f = message.getSignature();

  if (f != null) {
    writer.writeMessage(2, f, primitive_pb.Signature.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.BlocksQuery.prototype.getMeta = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.QueryPayloadMeta, 1);
};

proto.iroha.protocol.BlocksQuery.prototype.setMeta = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.BlocksQuery.prototype.clearMeta = function () {
  this.setMeta(undefined);
};

proto.iroha.protocol.BlocksQuery.prototype.hasMeta = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.BlocksQuery.prototype.getSignature = function () {
  return jspb.Message.getWrapperField(this, primitive_pb.Signature, 2);
};

proto.iroha.protocol.BlocksQuery.prototype.setSignature = function (value) {
  jspb.Message.setWrapperField(this, 2, value);
};

proto.iroha.protocol.BlocksQuery.prototype.clearSignature = function () {
  this.setSignature(undefined);
};

proto.iroha.protocol.BlocksQuery.prototype.hasSignature = function () {
  return jspb.Message.getField(this, 2) != null;
};

goog.object.extend(exports, proto.iroha.protocol);