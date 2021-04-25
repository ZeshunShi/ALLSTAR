"use strict";

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();

var block_pb = require('./block_pb.js');

var transaction_pb = require('./transaction_pb.js');

var primitive_pb = require('./primitive_pb.js');

goog.exportSymbol('proto.iroha.protocol.Account', null, global);
goog.exportSymbol('proto.iroha.protocol.AccountAsset', null, global);
goog.exportSymbol('proto.iroha.protocol.AccountAssetResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.AccountDetailResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.AccountResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.Asset', null, global);
goog.exportSymbol('proto.iroha.protocol.AssetResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.BlockErrorResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.BlockQueryResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.BlockResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.Domain', null, global);
goog.exportSymbol('proto.iroha.protocol.ErrorResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.ErrorResponse.Reason', null, global);
goog.exportSymbol('proto.iroha.protocol.QueryResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.RolePermissionsResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.RolesResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.SignatoriesResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.TransactionsPageResponse', null, global);
goog.exportSymbol('proto.iroha.protocol.TransactionsResponse', null, global);

proto.iroha.protocol.Asset = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.Asset, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Asset.displayName = 'proto.iroha.protocol.Asset';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Asset.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Asset.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Asset.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      assetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      domainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      precision: jspb.Message.getFieldWithDefault(msg, 3, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Asset.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Asset();
  return proto.iroha.protocol.Asset.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Asset.deserializeBinaryFromReader = function (msg, reader) {
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

      case 2:
        var value = reader.readString();
        msg.setDomainId(value);
        break;

      case 3:
        var value = reader.readUint32();
        msg.setPrecision(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Asset.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Asset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Asset.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAssetId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getDomainId();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getPrecision();

  if (f !== 0) {
    writer.writeUint32(3, f);
  }
};

proto.iroha.protocol.Asset.prototype.getAssetId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.Asset.prototype.setAssetId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.Asset.prototype.getDomainId = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.Asset.prototype.setDomainId = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.Asset.prototype.getPrecision = function () {
  return jspb.Message.getFieldWithDefault(this, 3, 0);
};

proto.iroha.protocol.Asset.prototype.setPrecision = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.Domain = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.Domain, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Domain.displayName = 'proto.iroha.protocol.Domain';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Domain.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Domain.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Domain.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      domainId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      defaultRole: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Domain.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Domain();
  return proto.iroha.protocol.Domain.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Domain.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setDomainId(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setDefaultRole(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Domain.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Domain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Domain.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDomainId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getDefaultRole();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.Domain.prototype.getDomainId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.Domain.prototype.setDomainId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.Domain.prototype.getDefaultRole = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.Domain.prototype.setDefaultRole = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.Account = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.Account, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Account.displayName = 'proto.iroha.protocol.Account';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Account.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Account.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Account.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      domainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      quorum: jspb.Message.getFieldWithDefault(msg, 3, 0),
      jsonData: jspb.Message.getFieldWithDefault(msg, 4, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Account.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Account();
  return proto.iroha.protocol.Account.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Account.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setDomainId(value);
        break;

      case 3:
        var value = reader.readUint32();
        msg.setQuorum(value);
        break;

      case 4:
        var value = reader.readString();
        msg.setJsonData(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Account.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Account.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getDomainId();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getQuorum();

  if (f !== 0) {
    writer.writeUint32(3, f);
  }

  f = message.getJsonData();

  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

proto.iroha.protocol.Account.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.Account.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.Account.prototype.getDomainId = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.Account.prototype.setDomainId = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.Account.prototype.getQuorum = function () {
  return jspb.Message.getFieldWithDefault(this, 3, 0);
};

proto.iroha.protocol.Account.prototype.setQuorum = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.Account.prototype.getJsonData = function () {
  return jspb.Message.getFieldWithDefault(this, 4, "");
};

proto.iroha.protocol.Account.prototype.setJsonData = function (value) {
  jspb.Message.setField(this, 4, value);
};

proto.iroha.protocol.AccountAsset = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.AccountAsset, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AccountAsset.displayName = 'proto.iroha.protocol.AccountAsset';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AccountAsset.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AccountAsset.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AccountAsset.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      assetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      accountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      balance: jspb.Message.getFieldWithDefault(msg, 3, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AccountAsset.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AccountAsset();
  return proto.iroha.protocol.AccountAsset.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AccountAsset.deserializeBinaryFromReader = function (msg, reader) {
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

      case 2:
        var value = reader.readString();
        msg.setAccountId(value);
        break;

      case 3:
        var value = reader.readString();
        msg.setBalance(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AccountAsset.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AccountAsset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AccountAsset.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAssetId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBalance();

  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

proto.iroha.protocol.AccountAsset.prototype.getAssetId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.AccountAsset.prototype.setAssetId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.AccountAsset.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.AccountAsset.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.AccountAsset.prototype.getBalance = function () {
  return jspb.Message.getFieldWithDefault(this, 3, "");
};

proto.iroha.protocol.AccountAsset.prototype.setBalance = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.AccountAssetResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.AccountAssetResponse.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.AccountAssetResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AccountAssetResponse.displayName = 'proto.iroha.protocol.AccountAssetResponse';
}

proto.iroha.protocol.AccountAssetResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AccountAssetResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AccountAssetResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AccountAssetResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountAssetsList: jspb.Message.toObjectList(msg.getAccountAssetsList(), proto.iroha.protocol.AccountAsset.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AccountAssetResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AccountAssetResponse();
  return proto.iroha.protocol.AccountAssetResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AccountAssetResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.AccountAsset();
        reader.readMessage(value, proto.iroha.protocol.AccountAsset.deserializeBinaryFromReader);
        msg.addAccountAssets(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AccountAssetResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AccountAssetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AccountAssetResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountAssetsList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.iroha.protocol.AccountAsset.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.AccountAssetResponse.prototype.getAccountAssetsList = function () {
  return jspb.Message.getRepeatedWrapperField(this, proto.iroha.protocol.AccountAsset, 1);
};

proto.iroha.protocol.AccountAssetResponse.prototype.setAccountAssetsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

proto.iroha.protocol.AccountAssetResponse.prototype.addAccountAssets = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iroha.protocol.AccountAsset, opt_index);
};

proto.iroha.protocol.AccountAssetResponse.prototype.clearAccountAssetsList = function () {
  this.setAccountAssetsList([]);
};

proto.iroha.protocol.AccountDetailResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.AccountDetailResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AccountDetailResponse.displayName = 'proto.iroha.protocol.AccountDetailResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AccountDetailResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AccountDetailResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AccountDetailResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      detail: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AccountDetailResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AccountDetailResponse();
  return proto.iroha.protocol.AccountDetailResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AccountDetailResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setDetail(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AccountDetailResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AccountDetailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AccountDetailResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDetail();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

proto.iroha.protocol.AccountDetailResponse.prototype.getDetail = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.AccountDetailResponse.prototype.setDetail = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.AccountResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.AccountResponse.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.AccountResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AccountResponse.displayName = 'proto.iroha.protocol.AccountResponse';
}

proto.iroha.protocol.AccountResponse.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AccountResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AccountResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AccountResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      account: (f = msg.getAccount()) && proto.iroha.protocol.Account.toObject(includeInstance, f),
      accountRolesList: jspb.Message.getRepeatedField(msg, 2)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AccountResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AccountResponse();
  return proto.iroha.protocol.AccountResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AccountResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.Account();
        reader.readMessage(value, proto.iroha.protocol.Account.deserializeBinaryFromReader);
        msg.setAccount(value);
        break;

      case 2:
        var value = reader.readString();
        msg.addAccountRoles(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AccountResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AccountResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccount();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.Account.serializeBinaryToWriter);
  }

  f = message.getAccountRolesList();

  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
};

proto.iroha.protocol.AccountResponse.prototype.getAccount = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.Account, 1);
};

proto.iroha.protocol.AccountResponse.prototype.setAccount = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.AccountResponse.prototype.clearAccount = function () {
  this.setAccount(undefined);
};

proto.iroha.protocol.AccountResponse.prototype.hasAccount = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.AccountResponse.prototype.getAccountRolesList = function () {
  return jspb.Message.getRepeatedField(this, 2);
};

proto.iroha.protocol.AccountResponse.prototype.setAccountRolesList = function (value) {
  jspb.Message.setField(this, 2, value || []);
};

proto.iroha.protocol.AccountResponse.prototype.addAccountRoles = function (value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

proto.iroha.protocol.AccountResponse.prototype.clearAccountRolesList = function () {
  this.setAccountRolesList([]);
};

proto.iroha.protocol.AssetResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.AssetResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AssetResponse.displayName = 'proto.iroha.protocol.AssetResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AssetResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AssetResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AssetResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      asset: (f = msg.getAsset()) && proto.iroha.protocol.Asset.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AssetResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AssetResponse();
  return proto.iroha.protocol.AssetResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AssetResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.Asset();
        reader.readMessage(value, proto.iroha.protocol.Asset.deserializeBinaryFromReader);
        msg.setAsset(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AssetResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AssetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AssetResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAsset();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.Asset.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.AssetResponse.prototype.getAsset = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.Asset, 1);
};

proto.iroha.protocol.AssetResponse.prototype.setAsset = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.AssetResponse.prototype.clearAsset = function () {
  this.setAsset(undefined);
};

proto.iroha.protocol.AssetResponse.prototype.hasAsset = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.RolesResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.RolesResponse.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.RolesResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.RolesResponse.displayName = 'proto.iroha.protocol.RolesResponse';
}

proto.iroha.protocol.RolesResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.RolesResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.RolesResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.RolesResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      rolesList: jspb.Message.getRepeatedField(msg, 1)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.RolesResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.RolesResponse();
  return proto.iroha.protocol.RolesResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.RolesResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.addRoles(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.RolesResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.RolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.RolesResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRolesList();

  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
};

proto.iroha.protocol.RolesResponse.prototype.getRolesList = function () {
  return jspb.Message.getRepeatedField(this, 1);
};

proto.iroha.protocol.RolesResponse.prototype.setRolesList = function (value) {
  jspb.Message.setField(this, 1, value || []);
};

proto.iroha.protocol.RolesResponse.prototype.addRoles = function (value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

proto.iroha.protocol.RolesResponse.prototype.clearRolesList = function () {
  this.setRolesList([]);
};

proto.iroha.protocol.RolePermissionsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.RolePermissionsResponse.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.RolePermissionsResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.RolePermissionsResponse.displayName = 'proto.iroha.protocol.RolePermissionsResponse';
}

proto.iroha.protocol.RolePermissionsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.RolePermissionsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.RolePermissionsResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.RolePermissionsResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      permissionsList: jspb.Message.getRepeatedField(msg, 1)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.RolePermissionsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.RolePermissionsResponse();
  return proto.iroha.protocol.RolePermissionsResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.RolePermissionsResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readPackedEnum();
        msg.setPermissionsList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.RolePermissionsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.RolePermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.RolePermissionsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPermissionsList();

  if (f.length > 0) {
    writer.writePackedEnum(1, f);
  }
};

proto.iroha.protocol.RolePermissionsResponse.prototype.getPermissionsList = function () {
  return jspb.Message.getRepeatedField(this, 1);
};

proto.iroha.protocol.RolePermissionsResponse.prototype.setPermissionsList = function (value) {
  jspb.Message.setField(this, 1, value || []);
};

proto.iroha.protocol.RolePermissionsResponse.prototype.addPermissions = function (value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

proto.iroha.protocol.RolePermissionsResponse.prototype.clearPermissionsList = function () {
  this.setPermissionsList([]);
};

proto.iroha.protocol.ErrorResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.ErrorResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.ErrorResponse.displayName = 'proto.iroha.protocol.ErrorResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.ErrorResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.ErrorResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.ErrorResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      reason: jspb.Message.getFieldWithDefault(msg, 1, 0),
      message: jspb.Message.getFieldWithDefault(msg, 2, ""),
      errorCode: jspb.Message.getFieldWithDefault(msg, 3, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.ErrorResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.ErrorResponse();
  return proto.iroha.protocol.ErrorResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.ErrorResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readEnum();
        msg.setReason(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setMessage(value);
        break;

      case 3:
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

proto.iroha.protocol.ErrorResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.ErrorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.ErrorResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getReason();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMessage();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getErrorCode();

  if (f !== 0) {
    writer.writeUint32(3, f);
  }
};

proto.iroha.protocol.ErrorResponse.Reason = {
  STATELESS_INVALID: 0,
  STATEFUL_INVALID: 1,
  NO_ACCOUNT: 2,
  NO_ACCOUNT_ASSETS: 3,
  NO_ACCOUNT_DETAIL: 4,
  NO_SIGNATORIES: 5,
  NOT_SUPPORTED: 6,
  NO_ASSET: 7,
  NO_ROLES: 8
};

proto.iroha.protocol.ErrorResponse.prototype.getReason = function () {
  return jspb.Message.getFieldWithDefault(this, 1, 0);
};

proto.iroha.protocol.ErrorResponse.prototype.setReason = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.ErrorResponse.prototype.getMessage = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.ErrorResponse.prototype.setMessage = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.ErrorResponse.prototype.getErrorCode = function () {
  return jspb.Message.getFieldWithDefault(this, 3, 0);
};

proto.iroha.protocol.ErrorResponse.prototype.setErrorCode = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.SignatoriesResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.SignatoriesResponse.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.SignatoriesResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.SignatoriesResponse.displayName = 'proto.iroha.protocol.SignatoriesResponse';
}

proto.iroha.protocol.SignatoriesResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.SignatoriesResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.SignatoriesResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.SignatoriesResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      keysList: jspb.Message.getRepeatedField(msg, 1)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.SignatoriesResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.SignatoriesResponse();
  return proto.iroha.protocol.SignatoriesResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.SignatoriesResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.addKeys(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.SignatoriesResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.SignatoriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.SignatoriesResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getKeysList();

  if (f.length > 0) {
    writer.writeRepeatedString(1, f);
  }
};

proto.iroha.protocol.SignatoriesResponse.prototype.getKeysList = function () {
  return jspb.Message.getRepeatedField(this, 1);
};

proto.iroha.protocol.SignatoriesResponse.prototype.setKeysList = function (value) {
  jspb.Message.setField(this, 1, value || []);
};

proto.iroha.protocol.SignatoriesResponse.prototype.addKeys = function (value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

proto.iroha.protocol.SignatoriesResponse.prototype.clearKeysList = function () {
  this.setKeysList([]);
};

proto.iroha.protocol.TransactionsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.TransactionsResponse.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.TransactionsResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.TransactionsResponse.displayName = 'proto.iroha.protocol.TransactionsResponse';
}

proto.iroha.protocol.TransactionsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.TransactionsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.TransactionsResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.TransactionsResponse.toObject = function (includeInstance, msg) {
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

proto.iroha.protocol.TransactionsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.TransactionsResponse();
  return proto.iroha.protocol.TransactionsResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.TransactionsResponse.deserializeBinaryFromReader = function (msg, reader) {
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

proto.iroha.protocol.TransactionsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.TransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.TransactionsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransactionsList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, transaction_pb.Transaction.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.TransactionsResponse.prototype.getTransactionsList = function () {
  return jspb.Message.getRepeatedWrapperField(this, transaction_pb.Transaction, 1);
};

proto.iroha.protocol.TransactionsResponse.prototype.setTransactionsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

proto.iroha.protocol.TransactionsResponse.prototype.addTransactions = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iroha.protocol.Transaction, opt_index);
};

proto.iroha.protocol.TransactionsResponse.prototype.clearTransactionsList = function () {
  this.setTransactionsList([]);
};

proto.iroha.protocol.TransactionsPageResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.TransactionsPageResponse.repeatedFields_, proto.iroha.protocol.TransactionsPageResponse.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.TransactionsPageResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.TransactionsPageResponse.displayName = 'proto.iroha.protocol.TransactionsPageResponse';
}

proto.iroha.protocol.TransactionsPageResponse.repeatedFields_ = [1];
proto.iroha.protocol.TransactionsPageResponse.oneofGroups_ = [[3]];
proto.iroha.protocol.TransactionsPageResponse.NextPageTagCase = {
  NEXT_PAGE_TAG_NOT_SET: 0,
  NEXT_TX_HASH: 3
};

proto.iroha.protocol.TransactionsPageResponse.prototype.getNextPageTagCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.TransactionsPageResponse.oneofGroups_[0]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.TransactionsPageResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.TransactionsPageResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.TransactionsPageResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(), transaction_pb.Transaction.toObject, includeInstance),
      allTransactionsSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
      nextTxHash: jspb.Message.getFieldWithDefault(msg, 3, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.TransactionsPageResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.TransactionsPageResponse();
  return proto.iroha.protocol.TransactionsPageResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.TransactionsPageResponse.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setAllTransactionsSize(value);
        break;

      case 3:
        var value = reader.readString();
        msg.setNextTxHash(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.TransactionsPageResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.TransactionsPageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.TransactionsPageResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTransactionsList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, transaction_pb.Transaction.serializeBinaryToWriter);
  }

  f = message.getAllTransactionsSize();

  if (f !== 0) {
    writer.writeUint32(2, f);
  }

  f = jspb.Message.getField(message, 3);

  if (f != null) {
    writer.writeString(3, f);
  }
};

proto.iroha.protocol.TransactionsPageResponse.prototype.getTransactionsList = function () {
  return jspb.Message.getRepeatedWrapperField(this, transaction_pb.Transaction, 1);
};

proto.iroha.protocol.TransactionsPageResponse.prototype.setTransactionsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

proto.iroha.protocol.TransactionsPageResponse.prototype.addTransactions = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.iroha.protocol.Transaction, opt_index);
};

proto.iroha.protocol.TransactionsPageResponse.prototype.clearTransactionsList = function () {
  this.setTransactionsList([]);
};

proto.iroha.protocol.TransactionsPageResponse.prototype.getAllTransactionsSize = function () {
  return jspb.Message.getFieldWithDefault(this, 2, 0);
};

proto.iroha.protocol.TransactionsPageResponse.prototype.setAllTransactionsSize = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.TransactionsPageResponse.prototype.getNextTxHash = function () {
  return jspb.Message.getFieldWithDefault(this, 3, "");
};

proto.iroha.protocol.TransactionsPageResponse.prototype.setNextTxHash = function (value) {
  jspb.Message.setOneofField(this, 3, proto.iroha.protocol.TransactionsPageResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.TransactionsPageResponse.prototype.clearNextTxHash = function () {
  jspb.Message.setOneofField(this, 3, proto.iroha.protocol.TransactionsPageResponse.oneofGroups_[0], undefined);
};

proto.iroha.protocol.TransactionsPageResponse.prototype.hasNextTxHash = function () {
  return jspb.Message.getField(this, 3) != null;
};

proto.iroha.protocol.QueryResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.QueryResponse.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.QueryResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.QueryResponse.displayName = 'proto.iroha.protocol.QueryResponse';
}

proto.iroha.protocol.QueryResponse.oneofGroups_ = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]];
proto.iroha.protocol.QueryResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  ACCOUNT_ASSETS_RESPONSE: 1,
  ACCOUNT_DETAIL_RESPONSE: 2,
  ACCOUNT_RESPONSE: 3,
  ERROR_RESPONSE: 4,
  SIGNATORIES_RESPONSE: 5,
  TRANSACTIONS_RESPONSE: 6,
  ASSET_RESPONSE: 7,
  ROLES_RESPONSE: 8,
  ROLE_PERMISSIONS_RESPONSE: 9,
  TRANSACTIONS_PAGE_RESPONSE: 11,
  BLOCK_RESPONSE: 12
};

proto.iroha.protocol.QueryResponse.prototype.getResponseCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.QueryResponse.oneofGroups_[0]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.QueryResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.QueryResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.QueryResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountAssetsResponse: (f = msg.getAccountAssetsResponse()) && proto.iroha.protocol.AccountAssetResponse.toObject(includeInstance, f),
      accountDetailResponse: (f = msg.getAccountDetailResponse()) && proto.iroha.protocol.AccountDetailResponse.toObject(includeInstance, f),
      accountResponse: (f = msg.getAccountResponse()) && proto.iroha.protocol.AccountResponse.toObject(includeInstance, f),
      errorResponse: (f = msg.getErrorResponse()) && proto.iroha.protocol.ErrorResponse.toObject(includeInstance, f),
      signatoriesResponse: (f = msg.getSignatoriesResponse()) && proto.iroha.protocol.SignatoriesResponse.toObject(includeInstance, f),
      transactionsResponse: (f = msg.getTransactionsResponse()) && proto.iroha.protocol.TransactionsResponse.toObject(includeInstance, f),
      assetResponse: (f = msg.getAssetResponse()) && proto.iroha.protocol.AssetResponse.toObject(includeInstance, f),
      rolesResponse: (f = msg.getRolesResponse()) && proto.iroha.protocol.RolesResponse.toObject(includeInstance, f),
      rolePermissionsResponse: (f = msg.getRolePermissionsResponse()) && proto.iroha.protocol.RolePermissionsResponse.toObject(includeInstance, f),
      transactionsPageResponse: (f = msg.getTransactionsPageResponse()) && proto.iroha.protocol.TransactionsPageResponse.toObject(includeInstance, f),
      blockResponse: (f = msg.getBlockResponse()) && proto.iroha.protocol.BlockResponse.toObject(includeInstance, f),
      queryHash: jspb.Message.getFieldWithDefault(msg, 10, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.QueryResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.QueryResponse();
  return proto.iroha.protocol.QueryResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.QueryResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.AccountAssetResponse();
        reader.readMessage(value, proto.iroha.protocol.AccountAssetResponse.deserializeBinaryFromReader);
        msg.setAccountAssetsResponse(value);
        break;

      case 2:
        var value = new proto.iroha.protocol.AccountDetailResponse();
        reader.readMessage(value, proto.iroha.protocol.AccountDetailResponse.deserializeBinaryFromReader);
        msg.setAccountDetailResponse(value);
        break;

      case 3:
        var value = new proto.iroha.protocol.AccountResponse();
        reader.readMessage(value, proto.iroha.protocol.AccountResponse.deserializeBinaryFromReader);
        msg.setAccountResponse(value);
        break;

      case 4:
        var value = new proto.iroha.protocol.ErrorResponse();
        reader.readMessage(value, proto.iroha.protocol.ErrorResponse.deserializeBinaryFromReader);
        msg.setErrorResponse(value);
        break;

      case 5:
        var value = new proto.iroha.protocol.SignatoriesResponse();
        reader.readMessage(value, proto.iroha.protocol.SignatoriesResponse.deserializeBinaryFromReader);
        msg.setSignatoriesResponse(value);
        break;

      case 6:
        var value = new proto.iroha.protocol.TransactionsResponse();
        reader.readMessage(value, proto.iroha.protocol.TransactionsResponse.deserializeBinaryFromReader);
        msg.setTransactionsResponse(value);
        break;

      case 7:
        var value = new proto.iroha.protocol.AssetResponse();
        reader.readMessage(value, proto.iroha.protocol.AssetResponse.deserializeBinaryFromReader);
        msg.setAssetResponse(value);
        break;

      case 8:
        var value = new proto.iroha.protocol.RolesResponse();
        reader.readMessage(value, proto.iroha.protocol.RolesResponse.deserializeBinaryFromReader);
        msg.setRolesResponse(value);
        break;

      case 9:
        var value = new proto.iroha.protocol.RolePermissionsResponse();
        reader.readMessage(value, proto.iroha.protocol.RolePermissionsResponse.deserializeBinaryFromReader);
        msg.setRolePermissionsResponse(value);
        break;

      case 11:
        var value = new proto.iroha.protocol.TransactionsPageResponse();
        reader.readMessage(value, proto.iroha.protocol.TransactionsPageResponse.deserializeBinaryFromReader);
        msg.setTransactionsPageResponse(value);
        break;

      case 12:
        var value = new proto.iroha.protocol.BlockResponse();
        reader.readMessage(value, proto.iroha.protocol.BlockResponse.deserializeBinaryFromReader);
        msg.setBlockResponse(value);
        break;

      case 10:
        var value = reader.readString();
        msg.setQueryHash(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.QueryResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.QueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.QueryResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountAssetsResponse();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.AccountAssetResponse.serializeBinaryToWriter);
  }

  f = message.getAccountDetailResponse();

  if (f != null) {
    writer.writeMessage(2, f, proto.iroha.protocol.AccountDetailResponse.serializeBinaryToWriter);
  }

  f = message.getAccountResponse();

  if (f != null) {
    writer.writeMessage(3, f, proto.iroha.protocol.AccountResponse.serializeBinaryToWriter);
  }

  f = message.getErrorResponse();

  if (f != null) {
    writer.writeMessage(4, f, proto.iroha.protocol.ErrorResponse.serializeBinaryToWriter);
  }

  f = message.getSignatoriesResponse();

  if (f != null) {
    writer.writeMessage(5, f, proto.iroha.protocol.SignatoriesResponse.serializeBinaryToWriter);
  }

  f = message.getTransactionsResponse();

  if (f != null) {
    writer.writeMessage(6, f, proto.iroha.protocol.TransactionsResponse.serializeBinaryToWriter);
  }

  f = message.getAssetResponse();

  if (f != null) {
    writer.writeMessage(7, f, proto.iroha.protocol.AssetResponse.serializeBinaryToWriter);
  }

  f = message.getRolesResponse();

  if (f != null) {
    writer.writeMessage(8, f, proto.iroha.protocol.RolesResponse.serializeBinaryToWriter);
  }

  f = message.getRolePermissionsResponse();

  if (f != null) {
    writer.writeMessage(9, f, proto.iroha.protocol.RolePermissionsResponse.serializeBinaryToWriter);
  }

  f = message.getTransactionsPageResponse();

  if (f != null) {
    writer.writeMessage(11, f, proto.iroha.protocol.TransactionsPageResponse.serializeBinaryToWriter);
  }

  f = message.getBlockResponse();

  if (f != null) {
    writer.writeMessage(12, f, proto.iroha.protocol.BlockResponse.serializeBinaryToWriter);
  }

  f = message.getQueryHash();

  if (f.length > 0) {
    writer.writeString(10, f);
  }
};

proto.iroha.protocol.QueryResponse.prototype.getAccountAssetsResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.AccountAssetResponse, 1);
};

proto.iroha.protocol.QueryResponse.prototype.setAccountAssetsResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearAccountAssetsResponse = function () {
  this.setAccountAssetsResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasAccountAssetsResponse = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getAccountDetailResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.AccountDetailResponse, 2);
};

proto.iroha.protocol.QueryResponse.prototype.setAccountDetailResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearAccountDetailResponse = function () {
  this.setAccountDetailResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasAccountDetailResponse = function () {
  return jspb.Message.getField(this, 2) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getAccountResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.AccountResponse, 3);
};

proto.iroha.protocol.QueryResponse.prototype.setAccountResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearAccountResponse = function () {
  this.setAccountResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasAccountResponse = function () {
  return jspb.Message.getField(this, 3) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getErrorResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.ErrorResponse, 4);
};

proto.iroha.protocol.QueryResponse.prototype.setErrorResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearErrorResponse = function () {
  this.setErrorResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasErrorResponse = function () {
  return jspb.Message.getField(this, 4) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getSignatoriesResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.SignatoriesResponse, 5);
};

proto.iroha.protocol.QueryResponse.prototype.setSignatoriesResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearSignatoriesResponse = function () {
  this.setSignatoriesResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasSignatoriesResponse = function () {
  return jspb.Message.getField(this, 5) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getTransactionsResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.TransactionsResponse, 6);
};

proto.iroha.protocol.QueryResponse.prototype.setTransactionsResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearTransactionsResponse = function () {
  this.setTransactionsResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasTransactionsResponse = function () {
  return jspb.Message.getField(this, 6) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getAssetResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.AssetResponse, 7);
};

proto.iroha.protocol.QueryResponse.prototype.setAssetResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearAssetResponse = function () {
  this.setAssetResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasAssetResponse = function () {
  return jspb.Message.getField(this, 7) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getRolesResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.RolesResponse, 8);
};

proto.iroha.protocol.QueryResponse.prototype.setRolesResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearRolesResponse = function () {
  this.setRolesResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasRolesResponse = function () {
  return jspb.Message.getField(this, 8) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getRolePermissionsResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.RolePermissionsResponse, 9);
};

proto.iroha.protocol.QueryResponse.prototype.setRolePermissionsResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearRolePermissionsResponse = function () {
  this.setRolePermissionsResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasRolePermissionsResponse = function () {
  return jspb.Message.getField(this, 9) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getTransactionsPageResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.TransactionsPageResponse, 11);
};

proto.iroha.protocol.QueryResponse.prototype.setTransactionsPageResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearTransactionsPageResponse = function () {
  this.setTransactionsPageResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasTransactionsPageResponse = function () {
  return jspb.Message.getField(this, 11) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getBlockResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.BlockResponse, 12);
};

proto.iroha.protocol.QueryResponse.prototype.setBlockResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.iroha.protocol.QueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.QueryResponse.prototype.clearBlockResponse = function () {
  this.setBlockResponse(undefined);
};

proto.iroha.protocol.QueryResponse.prototype.hasBlockResponse = function () {
  return jspb.Message.getField(this, 12) != null;
};

proto.iroha.protocol.QueryResponse.prototype.getQueryHash = function () {
  return jspb.Message.getFieldWithDefault(this, 10, "");
};

proto.iroha.protocol.QueryResponse.prototype.setQueryHash = function (value) {
  jspb.Message.setField(this, 10, value);
};

proto.iroha.protocol.BlockResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.BlockResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.BlockResponse.displayName = 'proto.iroha.protocol.BlockResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.BlockResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.BlockResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.BlockResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      block: (f = msg.getBlock()) && block_pb.Block.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.BlockResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.BlockResponse();
  return proto.iroha.protocol.BlockResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.BlockResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new block_pb.Block();
        reader.readMessage(value, block_pb.Block.deserializeBinaryFromReader);
        msg.setBlock(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.BlockResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.BlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.BlockResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBlock();

  if (f != null) {
    writer.writeMessage(1, f, block_pb.Block.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.BlockResponse.prototype.getBlock = function () {
  return jspb.Message.getWrapperField(this, block_pb.Block, 1);
};

proto.iroha.protocol.BlockResponse.prototype.setBlock = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.BlockResponse.prototype.clearBlock = function () {
  this.setBlock(undefined);
};

proto.iroha.protocol.BlockResponse.prototype.hasBlock = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.BlockErrorResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.BlockErrorResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.BlockErrorResponse.displayName = 'proto.iroha.protocol.BlockErrorResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.BlockErrorResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.BlockErrorResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.BlockErrorResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      message: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.BlockErrorResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.BlockErrorResponse();
  return proto.iroha.protocol.BlockErrorResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.BlockErrorResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setMessage(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.BlockErrorResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.BlockErrorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.BlockErrorResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getMessage();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

proto.iroha.protocol.BlockErrorResponse.prototype.getMessage = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.BlockErrorResponse.prototype.setMessage = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.BlockQueryResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.BlockQueryResponse.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.BlockQueryResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.BlockQueryResponse.displayName = 'proto.iroha.protocol.BlockQueryResponse';
}

proto.iroha.protocol.BlockQueryResponse.oneofGroups_ = [[1, 2]];
proto.iroha.protocol.BlockQueryResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  BLOCK_RESPONSE: 1,
  BLOCK_ERROR_RESPONSE: 2
};

proto.iroha.protocol.BlockQueryResponse.prototype.getResponseCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.BlockQueryResponse.oneofGroups_[0]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.BlockQueryResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.BlockQueryResponse.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.BlockQueryResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      blockResponse: (f = msg.getBlockResponse()) && proto.iroha.protocol.BlockResponse.toObject(includeInstance, f),
      blockErrorResponse: (f = msg.getBlockErrorResponse()) && proto.iroha.protocol.BlockErrorResponse.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.BlockQueryResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.BlockQueryResponse();
  return proto.iroha.protocol.BlockQueryResponse.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.BlockQueryResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.BlockResponse();
        reader.readMessage(value, proto.iroha.protocol.BlockResponse.deserializeBinaryFromReader);
        msg.setBlockResponse(value);
        break;

      case 2:
        var value = new proto.iroha.protocol.BlockErrorResponse();
        reader.readMessage(value, proto.iroha.protocol.BlockErrorResponse.deserializeBinaryFromReader);
        msg.setBlockErrorResponse(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.BlockQueryResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.BlockQueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.BlockQueryResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getBlockResponse();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.BlockResponse.serializeBinaryToWriter);
  }

  f = message.getBlockErrorResponse();

  if (f != null) {
    writer.writeMessage(2, f, proto.iroha.protocol.BlockErrorResponse.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.BlockQueryResponse.prototype.getBlockResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.BlockResponse, 1);
};

proto.iroha.protocol.BlockQueryResponse.prototype.setBlockResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.iroha.protocol.BlockQueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.BlockQueryResponse.prototype.clearBlockResponse = function () {
  this.setBlockResponse(undefined);
};

proto.iroha.protocol.BlockQueryResponse.prototype.hasBlockResponse = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.BlockQueryResponse.prototype.getBlockErrorResponse = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.BlockErrorResponse, 2);
};

proto.iroha.protocol.BlockQueryResponse.prototype.setBlockErrorResponse = function (value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.iroha.protocol.BlockQueryResponse.oneofGroups_[0], value);
};

proto.iroha.protocol.BlockQueryResponse.prototype.clearBlockErrorResponse = function () {
  this.setBlockErrorResponse(undefined);
};

proto.iroha.protocol.BlockQueryResponse.prototype.hasBlockErrorResponse = function () {
  return jspb.Message.getField(this, 2) != null;
};

goog.object.extend(exports, proto.iroha.protocol);