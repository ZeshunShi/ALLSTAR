"use strict";

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();

var primitive_pb = require('./primitive_pb.js');

goog.exportSymbol('proto.iroha.protocol.AddAssetQuantity', null, global);
goog.exportSymbol('proto.iroha.protocol.AddPeer', null, global);
goog.exportSymbol('proto.iroha.protocol.AddSignatory', null, global);
goog.exportSymbol('proto.iroha.protocol.AppendRole', null, global);
goog.exportSymbol('proto.iroha.protocol.Command', null, global);
goog.exportSymbol('proto.iroha.protocol.CreateAccount', null, global);
goog.exportSymbol('proto.iroha.protocol.CreateAsset', null, global);
goog.exportSymbol('proto.iroha.protocol.CreateDomain', null, global);
goog.exportSymbol('proto.iroha.protocol.CreateRole', null, global);
goog.exportSymbol('proto.iroha.protocol.DetachRole', null, global);
goog.exportSymbol('proto.iroha.protocol.GrantPermission', null, global);
goog.exportSymbol('proto.iroha.protocol.RemoveSignatory', null, global);
goog.exportSymbol('proto.iroha.protocol.RevokePermission', null, global);
goog.exportSymbol('proto.iroha.protocol.SetAccountDetail', null, global);
goog.exportSymbol('proto.iroha.protocol.SetAccountQuorum', null, global);
goog.exportSymbol('proto.iroha.protocol.SubtractAssetQuantity', null, global);
goog.exportSymbol('proto.iroha.protocol.TransferAsset', null, global);

proto.iroha.protocol.AddAssetQuantity = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.AddAssetQuantity, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AddAssetQuantity.displayName = 'proto.iroha.protocol.AddAssetQuantity';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AddAssetQuantity.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AddAssetQuantity.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AddAssetQuantity.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      assetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      amount: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AddAssetQuantity.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AddAssetQuantity();
  return proto.iroha.protocol.AddAssetQuantity.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AddAssetQuantity.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setAmount(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AddAssetQuantity.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AddAssetQuantity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AddAssetQuantity.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAssetId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getAmount();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.AddAssetQuantity.prototype.getAssetId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.AddAssetQuantity.prototype.setAssetId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.AddAssetQuantity.prototype.getAmount = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.AddAssetQuantity.prototype.setAmount = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.AddPeer = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.AddPeer, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AddPeer.displayName = 'proto.iroha.protocol.AddPeer';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AddPeer.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AddPeer.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AddPeer.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      peer: (f = msg.getPeer()) && primitive_pb.Peer.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AddPeer.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AddPeer();
  return proto.iroha.protocol.AddPeer.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AddPeer.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new primitive_pb.Peer();
        reader.readMessage(value, primitive_pb.Peer.deserializeBinaryFromReader);
        msg.setPeer(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AddPeer.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AddPeer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AddPeer.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPeer();

  if (f != null) {
    writer.writeMessage(1, f, primitive_pb.Peer.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.AddPeer.prototype.getPeer = function () {
  return jspb.Message.getWrapperField(this, primitive_pb.Peer, 1);
};

proto.iroha.protocol.AddPeer.prototype.setPeer = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.iroha.protocol.AddPeer.prototype.clearPeer = function () {
  this.setPeer(undefined);
};

proto.iroha.protocol.AddPeer.prototype.hasPeer = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.AddSignatory = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.AddSignatory, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AddSignatory.displayName = 'proto.iroha.protocol.AddSignatory';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AddSignatory.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AddSignatory.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AddSignatory.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      publicKey: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AddSignatory.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AddSignatory();
  return proto.iroha.protocol.AddSignatory.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AddSignatory.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setPublicKey(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AddSignatory.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AddSignatory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AddSignatory.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getPublicKey();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.AddSignatory.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.AddSignatory.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.AddSignatory.prototype.getPublicKey = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.AddSignatory.prototype.setPublicKey = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.CreateAsset = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.CreateAsset, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.CreateAsset.displayName = 'proto.iroha.protocol.CreateAsset';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.CreateAsset.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.CreateAsset.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.CreateAsset.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      assetName: jspb.Message.getFieldWithDefault(msg, 1, ""),
      domainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      precision: jspb.Message.getFieldWithDefault(msg, 3, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.CreateAsset.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.CreateAsset();
  return proto.iroha.protocol.CreateAsset.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.CreateAsset.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAssetName(value);
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

proto.iroha.protocol.CreateAsset.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.CreateAsset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.CreateAsset.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAssetName();

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

proto.iroha.protocol.CreateAsset.prototype.getAssetName = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.CreateAsset.prototype.setAssetName = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.CreateAsset.prototype.getDomainId = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.CreateAsset.prototype.setDomainId = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.CreateAsset.prototype.getPrecision = function () {
  return jspb.Message.getFieldWithDefault(this, 3, 0);
};

proto.iroha.protocol.CreateAsset.prototype.setPrecision = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.CreateAccount = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.CreateAccount, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.CreateAccount.displayName = 'proto.iroha.protocol.CreateAccount';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.CreateAccount.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.CreateAccount.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.CreateAccount.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountName: jspb.Message.getFieldWithDefault(msg, 1, ""),
      domainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      publicKey: jspb.Message.getFieldWithDefault(msg, 3, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.CreateAccount.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.CreateAccount();
  return proto.iroha.protocol.CreateAccount.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.CreateAccount.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setAccountName(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setDomainId(value);
        break;

      case 3:
        var value = reader.readString();
        msg.setPublicKey(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.CreateAccount.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.CreateAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.CreateAccount.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountName();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getDomainId();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getPublicKey();

  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

proto.iroha.protocol.CreateAccount.prototype.getAccountName = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.CreateAccount.prototype.setAccountName = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.CreateAccount.prototype.getDomainId = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.CreateAccount.prototype.setDomainId = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.CreateAccount.prototype.getPublicKey = function () {
  return jspb.Message.getFieldWithDefault(this, 3, "");
};

proto.iroha.protocol.CreateAccount.prototype.setPublicKey = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.SetAccountDetail = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.SetAccountDetail, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.SetAccountDetail.displayName = 'proto.iroha.protocol.SetAccountDetail';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.SetAccountDetail.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.SetAccountDetail.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.SetAccountDetail.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      key: jspb.Message.getFieldWithDefault(msg, 2, ""),
      value: jspb.Message.getFieldWithDefault(msg, 3, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.SetAccountDetail.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.SetAccountDetail();
  return proto.iroha.protocol.SetAccountDetail.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.SetAccountDetail.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setValue(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.SetAccountDetail.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.SetAccountDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.SetAccountDetail.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getKey();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getValue();

  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

proto.iroha.protocol.SetAccountDetail.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.SetAccountDetail.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.SetAccountDetail.prototype.getKey = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.SetAccountDetail.prototype.setKey = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.SetAccountDetail.prototype.getValue = function () {
  return jspb.Message.getFieldWithDefault(this, 3, "");
};

proto.iroha.protocol.SetAccountDetail.prototype.setValue = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.CreateDomain = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.CreateDomain, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.CreateDomain.displayName = 'proto.iroha.protocol.CreateDomain';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.CreateDomain.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.CreateDomain.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.CreateDomain.toObject = function (includeInstance, msg) {
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

proto.iroha.protocol.CreateDomain.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.CreateDomain();
  return proto.iroha.protocol.CreateDomain.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.CreateDomain.deserializeBinaryFromReader = function (msg, reader) {
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

proto.iroha.protocol.CreateDomain.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.CreateDomain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.CreateDomain.serializeBinaryToWriter = function (message, writer) {
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

proto.iroha.protocol.CreateDomain.prototype.getDomainId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.CreateDomain.prototype.setDomainId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.CreateDomain.prototype.getDefaultRole = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.CreateDomain.prototype.setDefaultRole = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.RemoveSignatory = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.RemoveSignatory, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.RemoveSignatory.displayName = 'proto.iroha.protocol.RemoveSignatory';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.RemoveSignatory.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.RemoveSignatory.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.RemoveSignatory.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      publicKey: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.RemoveSignatory.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.RemoveSignatory();
  return proto.iroha.protocol.RemoveSignatory.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.RemoveSignatory.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setPublicKey(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.RemoveSignatory.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.RemoveSignatory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.RemoveSignatory.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getPublicKey();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.RemoveSignatory.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.RemoveSignatory.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.RemoveSignatory.prototype.getPublicKey = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.RemoveSignatory.prototype.setPublicKey = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.SetAccountQuorum = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.SetAccountQuorum, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.SetAccountQuorum.displayName = 'proto.iroha.protocol.SetAccountQuorum';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.SetAccountQuorum.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.SetAccountQuorum.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.SetAccountQuorum.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      quorum: jspb.Message.getFieldWithDefault(msg, 2, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.SetAccountQuorum.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.SetAccountQuorum();
  return proto.iroha.protocol.SetAccountQuorum.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.SetAccountQuorum.deserializeBinaryFromReader = function (msg, reader) {
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

proto.iroha.protocol.SetAccountQuorum.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.SetAccountQuorum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.SetAccountQuorum.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getQuorum();

  if (f !== 0) {
    writer.writeUint32(2, f);
  }
};

proto.iroha.protocol.SetAccountQuorum.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.SetAccountQuorum.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.SetAccountQuorum.prototype.getQuorum = function () {
  return jspb.Message.getFieldWithDefault(this, 2, 0);
};

proto.iroha.protocol.SetAccountQuorum.prototype.setQuorum = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.TransferAsset = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.TransferAsset, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.TransferAsset.displayName = 'proto.iroha.protocol.TransferAsset';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.TransferAsset.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.TransferAsset.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.TransferAsset.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      srcAccountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      destAccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
      assetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
      description: jspb.Message.getFieldWithDefault(msg, 4, ""),
      amount: jspb.Message.getFieldWithDefault(msg, 5, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.TransferAsset.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.TransferAsset();
  return proto.iroha.protocol.TransferAsset.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.TransferAsset.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setSrcAccountId(value);
        break;

      case 2:
        var value = reader.readString();
        msg.setDestAccountId(value);
        break;

      case 3:
        var value = reader.readString();
        msg.setAssetId(value);
        break;

      case 4:
        var value = reader.readString();
        msg.setDescription(value);
        break;

      case 5:
        var value = reader.readString();
        msg.setAmount(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.TransferAsset.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.TransferAsset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.TransferAsset.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getSrcAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getDestAccountId();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getAssetId();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getDescription();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getAmount();

  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

proto.iroha.protocol.TransferAsset.prototype.getSrcAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.TransferAsset.prototype.setSrcAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.TransferAsset.prototype.getDestAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.TransferAsset.prototype.setDestAccountId = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.TransferAsset.prototype.getAssetId = function () {
  return jspb.Message.getFieldWithDefault(this, 3, "");
};

proto.iroha.protocol.TransferAsset.prototype.setAssetId = function (value) {
  jspb.Message.setField(this, 3, value);
};

proto.iroha.protocol.TransferAsset.prototype.getDescription = function () {
  return jspb.Message.getFieldWithDefault(this, 4, "");
};

proto.iroha.protocol.TransferAsset.prototype.setDescription = function (value) {
  jspb.Message.setField(this, 4, value);
};

proto.iroha.protocol.TransferAsset.prototype.getAmount = function () {
  return jspb.Message.getFieldWithDefault(this, 5, "");
};

proto.iroha.protocol.TransferAsset.prototype.setAmount = function (value) {
  jspb.Message.setField(this, 5, value);
};

proto.iroha.protocol.AppendRole = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.AppendRole, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.AppendRole.displayName = 'proto.iroha.protocol.AppendRole';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.AppendRole.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.AppendRole.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.AppendRole.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      roleName: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.AppendRole.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.AppendRole();
  return proto.iroha.protocol.AppendRole.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.AppendRole.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setRoleName(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.AppendRole.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.AppendRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.AppendRole.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getRoleName();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.AppendRole.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.AppendRole.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.AppendRole.prototype.getRoleName = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.AppendRole.prototype.setRoleName = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.DetachRole = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.DetachRole, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.DetachRole.displayName = 'proto.iroha.protocol.DetachRole';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.DetachRole.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.DetachRole.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.DetachRole.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      roleName: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.DetachRole.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.DetachRole();
  return proto.iroha.protocol.DetachRole.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.DetachRole.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setRoleName(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.DetachRole.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.DetachRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.DetachRole.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getRoleName();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.DetachRole.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.DetachRole.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.DetachRole.prototype.getRoleName = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.DetachRole.prototype.setRoleName = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.CreateRole = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.iroha.protocol.CreateRole.repeatedFields_, null);
};

goog.inherits(proto.iroha.protocol.CreateRole, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.CreateRole.displayName = 'proto.iroha.protocol.CreateRole';
}

proto.iroha.protocol.CreateRole.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.CreateRole.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.CreateRole.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.CreateRole.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      roleName: jspb.Message.getFieldWithDefault(msg, 1, ""),
      permissionsList: jspb.Message.getRepeatedField(msg, 2)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.CreateRole.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.CreateRole();
  return proto.iroha.protocol.CreateRole.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.CreateRole.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = reader.readString();
        msg.setRoleName(value);
        break;

      case 2:
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

proto.iroha.protocol.CreateRole.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.CreateRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.CreateRole.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getRoleName();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getPermissionsList();

  if (f.length > 0) {
    writer.writePackedEnum(2, f);
  }
};

proto.iroha.protocol.CreateRole.prototype.getRoleName = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.CreateRole.prototype.setRoleName = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.CreateRole.prototype.getPermissionsList = function () {
  return jspb.Message.getRepeatedField(this, 2);
};

proto.iroha.protocol.CreateRole.prototype.setPermissionsList = function (value) {
  jspb.Message.setField(this, 2, value || []);
};

proto.iroha.protocol.CreateRole.prototype.addPermissions = function (value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

proto.iroha.protocol.CreateRole.prototype.clearPermissionsList = function () {
  this.setPermissionsList([]);
};

proto.iroha.protocol.GrantPermission = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.GrantPermission, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.GrantPermission.displayName = 'proto.iroha.protocol.GrantPermission';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.GrantPermission.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.GrantPermission.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.GrantPermission.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      permission: jspb.Message.getFieldWithDefault(msg, 2, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.GrantPermission.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.GrantPermission();
  return proto.iroha.protocol.GrantPermission.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.GrantPermission.deserializeBinaryFromReader = function (msg, reader) {
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
        var value = reader.readEnum();
        msg.setPermission(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.GrantPermission.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.GrantPermission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.GrantPermission.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getPermission();

  if (f !== 0.0) {
    writer.writeEnum(2, f);
  }
};

proto.iroha.protocol.GrantPermission.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.GrantPermission.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.GrantPermission.prototype.getPermission = function () {
  return jspb.Message.getFieldWithDefault(this, 2, 0);
};

proto.iroha.protocol.GrantPermission.prototype.setPermission = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.RevokePermission = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.RevokePermission, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.RevokePermission.displayName = 'proto.iroha.protocol.RevokePermission';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.RevokePermission.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.RevokePermission.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.RevokePermission.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      accountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      permission: jspb.Message.getFieldWithDefault(msg, 2, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.RevokePermission.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.RevokePermission();
  return proto.iroha.protocol.RevokePermission.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.RevokePermission.deserializeBinaryFromReader = function (msg, reader) {
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
        var value = reader.readEnum();
        msg.setPermission(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.RevokePermission.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.RevokePermission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.RevokePermission.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAccountId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getPermission();

  if (f !== 0.0) {
    writer.writeEnum(2, f);
  }
};

proto.iroha.protocol.RevokePermission.prototype.getAccountId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.RevokePermission.prototype.setAccountId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.RevokePermission.prototype.getPermission = function () {
  return jspb.Message.getFieldWithDefault(this, 2, 0);
};

proto.iroha.protocol.RevokePermission.prototype.setPermission = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.SubtractAssetQuantity = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.iroha.protocol.SubtractAssetQuantity, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.SubtractAssetQuantity.displayName = 'proto.iroha.protocol.SubtractAssetQuantity';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.SubtractAssetQuantity.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.SubtractAssetQuantity.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.SubtractAssetQuantity.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      assetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
      amount: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.SubtractAssetQuantity.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.SubtractAssetQuantity();
  return proto.iroha.protocol.SubtractAssetQuantity.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.SubtractAssetQuantity.deserializeBinaryFromReader = function (msg, reader) {
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
        msg.setAmount(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.SubtractAssetQuantity.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.SubtractAssetQuantity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.SubtractAssetQuantity.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAssetId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getAmount();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

proto.iroha.protocol.SubtractAssetQuantity.prototype.getAssetId = function () {
  return jspb.Message.getFieldWithDefault(this, 1, "");
};

proto.iroha.protocol.SubtractAssetQuantity.prototype.setAssetId = function (value) {
  jspb.Message.setField(this, 1, value);
};

proto.iroha.protocol.SubtractAssetQuantity.prototype.getAmount = function () {
  return jspb.Message.getFieldWithDefault(this, 2, "");
};

proto.iroha.protocol.SubtractAssetQuantity.prototype.setAmount = function (value) {
  jspb.Message.setField(this, 2, value);
};

proto.iroha.protocol.Command = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.iroha.protocol.Command.oneofGroups_);
};

goog.inherits(proto.iroha.protocol.Command, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.iroha.protocol.Command.displayName = 'proto.iroha.protocol.Command';
}

proto.iroha.protocol.Command.oneofGroups_ = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]];
proto.iroha.protocol.Command.CommandCase = {
  COMMAND_NOT_SET: 0,
  ADD_ASSET_QUANTITY: 1,
  ADD_PEER: 2,
  ADD_SIGNATORY: 3,
  APPEND_ROLE: 4,
  CREATE_ACCOUNT: 5,
  CREATE_ASSET: 6,
  CREATE_DOMAIN: 7,
  CREATE_ROLE: 8,
  DETACH_ROLE: 9,
  GRANT_PERMISSION: 10,
  REMOVE_SIGNATORY: 11,
  REVOKE_PERMISSION: 12,
  SET_ACCOUNT_DETAIL: 13,
  SET_ACCOUNT_QUORUM: 14,
  SUBTRACT_ASSET_QUANTITY: 15,
  TRANSFER_ASSET: 16
};

proto.iroha.protocol.Command.prototype.getCommandCase = function () {
  return jspb.Message.computeOneofCase(this, proto.iroha.protocol.Command.oneofGroups_[0]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.iroha.protocol.Command.prototype.toObject = function (opt_includeInstance) {
    return proto.iroha.protocol.Command.toObject(opt_includeInstance, this);
  };

  proto.iroha.protocol.Command.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      addAssetQuantity: (f = msg.getAddAssetQuantity()) && proto.iroha.protocol.AddAssetQuantity.toObject(includeInstance, f),
      addPeer: (f = msg.getAddPeer()) && proto.iroha.protocol.AddPeer.toObject(includeInstance, f),
      addSignatory: (f = msg.getAddSignatory()) && proto.iroha.protocol.AddSignatory.toObject(includeInstance, f),
      appendRole: (f = msg.getAppendRole()) && proto.iroha.protocol.AppendRole.toObject(includeInstance, f),
      createAccount: (f = msg.getCreateAccount()) && proto.iroha.protocol.CreateAccount.toObject(includeInstance, f),
      createAsset: (f = msg.getCreateAsset()) && proto.iroha.protocol.CreateAsset.toObject(includeInstance, f),
      createDomain: (f = msg.getCreateDomain()) && proto.iroha.protocol.CreateDomain.toObject(includeInstance, f),
      createRole: (f = msg.getCreateRole()) && proto.iroha.protocol.CreateRole.toObject(includeInstance, f),
      detachRole: (f = msg.getDetachRole()) && proto.iroha.protocol.DetachRole.toObject(includeInstance, f),
      grantPermission: (f = msg.getGrantPermission()) && proto.iroha.protocol.GrantPermission.toObject(includeInstance, f),
      removeSignatory: (f = msg.getRemoveSignatory()) && proto.iroha.protocol.RemoveSignatory.toObject(includeInstance, f),
      revokePermission: (f = msg.getRevokePermission()) && proto.iroha.protocol.RevokePermission.toObject(includeInstance, f),
      setAccountDetail: (f = msg.getSetAccountDetail()) && proto.iroha.protocol.SetAccountDetail.toObject(includeInstance, f),
      setAccountQuorum: (f = msg.getSetAccountQuorum()) && proto.iroha.protocol.SetAccountQuorum.toObject(includeInstance, f),
      subtractAssetQuantity: (f = msg.getSubtractAssetQuantity()) && proto.iroha.protocol.SubtractAssetQuantity.toObject(includeInstance, f),
      transferAsset: (f = msg.getTransferAsset()) && proto.iroha.protocol.TransferAsset.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}

proto.iroha.protocol.Command.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.iroha.protocol.Command();
  return proto.iroha.protocol.Command.deserializeBinaryFromReader(msg, reader);
};

proto.iroha.protocol.Command.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.iroha.protocol.AddAssetQuantity();
        reader.readMessage(value, proto.iroha.protocol.AddAssetQuantity.deserializeBinaryFromReader);
        msg.setAddAssetQuantity(value);
        break;

      case 2:
        var value = new proto.iroha.protocol.AddPeer();
        reader.readMessage(value, proto.iroha.protocol.AddPeer.deserializeBinaryFromReader);
        msg.setAddPeer(value);
        break;

      case 3:
        var value = new proto.iroha.protocol.AddSignatory();
        reader.readMessage(value, proto.iroha.protocol.AddSignatory.deserializeBinaryFromReader);
        msg.setAddSignatory(value);
        break;

      case 4:
        var value = new proto.iroha.protocol.AppendRole();
        reader.readMessage(value, proto.iroha.protocol.AppendRole.deserializeBinaryFromReader);
        msg.setAppendRole(value);
        break;

      case 5:
        var value = new proto.iroha.protocol.CreateAccount();
        reader.readMessage(value, proto.iroha.protocol.CreateAccount.deserializeBinaryFromReader);
        msg.setCreateAccount(value);
        break;

      case 6:
        var value = new proto.iroha.protocol.CreateAsset();
        reader.readMessage(value, proto.iroha.protocol.CreateAsset.deserializeBinaryFromReader);
        msg.setCreateAsset(value);
        break;

      case 7:
        var value = new proto.iroha.protocol.CreateDomain();
        reader.readMessage(value, proto.iroha.protocol.CreateDomain.deserializeBinaryFromReader);
        msg.setCreateDomain(value);
        break;

      case 8:
        var value = new proto.iroha.protocol.CreateRole();
        reader.readMessage(value, proto.iroha.protocol.CreateRole.deserializeBinaryFromReader);
        msg.setCreateRole(value);
        break;

      case 9:
        var value = new proto.iroha.protocol.DetachRole();
        reader.readMessage(value, proto.iroha.protocol.DetachRole.deserializeBinaryFromReader);
        msg.setDetachRole(value);
        break;

      case 10:
        var value = new proto.iroha.protocol.GrantPermission();
        reader.readMessage(value, proto.iroha.protocol.GrantPermission.deserializeBinaryFromReader);
        msg.setGrantPermission(value);
        break;

      case 11:
        var value = new proto.iroha.protocol.RemoveSignatory();
        reader.readMessage(value, proto.iroha.protocol.RemoveSignatory.deserializeBinaryFromReader);
        msg.setRemoveSignatory(value);
        break;

      case 12:
        var value = new proto.iroha.protocol.RevokePermission();
        reader.readMessage(value, proto.iroha.protocol.RevokePermission.deserializeBinaryFromReader);
        msg.setRevokePermission(value);
        break;

      case 13:
        var value = new proto.iroha.protocol.SetAccountDetail();
        reader.readMessage(value, proto.iroha.protocol.SetAccountDetail.deserializeBinaryFromReader);
        msg.setSetAccountDetail(value);
        break;

      case 14:
        var value = new proto.iroha.protocol.SetAccountQuorum();
        reader.readMessage(value, proto.iroha.protocol.SetAccountQuorum.deserializeBinaryFromReader);
        msg.setSetAccountQuorum(value);
        break;

      case 15:
        var value = new proto.iroha.protocol.SubtractAssetQuantity();
        reader.readMessage(value, proto.iroha.protocol.SubtractAssetQuantity.deserializeBinaryFromReader);
        msg.setSubtractAssetQuantity(value);
        break;

      case 16:
        var value = new proto.iroha.protocol.TransferAsset();
        reader.readMessage(value, proto.iroha.protocol.TransferAsset.deserializeBinaryFromReader);
        msg.setTransferAsset(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};

proto.iroha.protocol.Command.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.iroha.protocol.Command.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

proto.iroha.protocol.Command.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAddAssetQuantity();

  if (f != null) {
    writer.writeMessage(1, f, proto.iroha.protocol.AddAssetQuantity.serializeBinaryToWriter);
  }

  f = message.getAddPeer();

  if (f != null) {
    writer.writeMessage(2, f, proto.iroha.protocol.AddPeer.serializeBinaryToWriter);
  }

  f = message.getAddSignatory();

  if (f != null) {
    writer.writeMessage(3, f, proto.iroha.protocol.AddSignatory.serializeBinaryToWriter);
  }

  f = message.getAppendRole();

  if (f != null) {
    writer.writeMessage(4, f, proto.iroha.protocol.AppendRole.serializeBinaryToWriter);
  }

  f = message.getCreateAccount();

  if (f != null) {
    writer.writeMessage(5, f, proto.iroha.protocol.CreateAccount.serializeBinaryToWriter);
  }

  f = message.getCreateAsset();

  if (f != null) {
    writer.writeMessage(6, f, proto.iroha.protocol.CreateAsset.serializeBinaryToWriter);
  }

  f = message.getCreateDomain();

  if (f != null) {
    writer.writeMessage(7, f, proto.iroha.protocol.CreateDomain.serializeBinaryToWriter);
  }

  f = message.getCreateRole();

  if (f != null) {
    writer.writeMessage(8, f, proto.iroha.protocol.CreateRole.serializeBinaryToWriter);
  }

  f = message.getDetachRole();

  if (f != null) {
    writer.writeMessage(9, f, proto.iroha.protocol.DetachRole.serializeBinaryToWriter);
  }

  f = message.getGrantPermission();

  if (f != null) {
    writer.writeMessage(10, f, proto.iroha.protocol.GrantPermission.serializeBinaryToWriter);
  }

  f = message.getRemoveSignatory();

  if (f != null) {
    writer.writeMessage(11, f, proto.iroha.protocol.RemoveSignatory.serializeBinaryToWriter);
  }

  f = message.getRevokePermission();

  if (f != null) {
    writer.writeMessage(12, f, proto.iroha.protocol.RevokePermission.serializeBinaryToWriter);
  }

  f = message.getSetAccountDetail();

  if (f != null) {
    writer.writeMessage(13, f, proto.iroha.protocol.SetAccountDetail.serializeBinaryToWriter);
  }

  f = message.getSetAccountQuorum();

  if (f != null) {
    writer.writeMessage(14, f, proto.iroha.protocol.SetAccountQuorum.serializeBinaryToWriter);
  }

  f = message.getSubtractAssetQuantity();

  if (f != null) {
    writer.writeMessage(15, f, proto.iroha.protocol.SubtractAssetQuantity.serializeBinaryToWriter);
  }

  f = message.getTransferAsset();

  if (f != null) {
    writer.writeMessage(16, f, proto.iroha.protocol.TransferAsset.serializeBinaryToWriter);
  }
};

proto.iroha.protocol.Command.prototype.getAddAssetQuantity = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.AddAssetQuantity, 1);
};

proto.iroha.protocol.Command.prototype.setAddAssetQuantity = function (value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearAddAssetQuantity = function () {
  this.setAddAssetQuantity(undefined);
};

proto.iroha.protocol.Command.prototype.hasAddAssetQuantity = function () {
  return jspb.Message.getField(this, 1) != null;
};

proto.iroha.protocol.Command.prototype.getAddPeer = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.AddPeer, 2);
};

proto.iroha.protocol.Command.prototype.setAddPeer = function (value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearAddPeer = function () {
  this.setAddPeer(undefined);
};

proto.iroha.protocol.Command.prototype.hasAddPeer = function () {
  return jspb.Message.getField(this, 2) != null;
};

proto.iroha.protocol.Command.prototype.getAddSignatory = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.AddSignatory, 3);
};

proto.iroha.protocol.Command.prototype.setAddSignatory = function (value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearAddSignatory = function () {
  this.setAddSignatory(undefined);
};

proto.iroha.protocol.Command.prototype.hasAddSignatory = function () {
  return jspb.Message.getField(this, 3) != null;
};

proto.iroha.protocol.Command.prototype.getAppendRole = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.AppendRole, 4);
};

proto.iroha.protocol.Command.prototype.setAppendRole = function (value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearAppendRole = function () {
  this.setAppendRole(undefined);
};

proto.iroha.protocol.Command.prototype.hasAppendRole = function () {
  return jspb.Message.getField(this, 4) != null;
};

proto.iroha.protocol.Command.prototype.getCreateAccount = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.CreateAccount, 5);
};

proto.iroha.protocol.Command.prototype.setCreateAccount = function (value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearCreateAccount = function () {
  this.setCreateAccount(undefined);
};

proto.iroha.protocol.Command.prototype.hasCreateAccount = function () {
  return jspb.Message.getField(this, 5) != null;
};

proto.iroha.protocol.Command.prototype.getCreateAsset = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.CreateAsset, 6);
};

proto.iroha.protocol.Command.prototype.setCreateAsset = function (value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearCreateAsset = function () {
  this.setCreateAsset(undefined);
};

proto.iroha.protocol.Command.prototype.hasCreateAsset = function () {
  return jspb.Message.getField(this, 6) != null;
};

proto.iroha.protocol.Command.prototype.getCreateDomain = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.CreateDomain, 7);
};

proto.iroha.protocol.Command.prototype.setCreateDomain = function (value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearCreateDomain = function () {
  this.setCreateDomain(undefined);
};

proto.iroha.protocol.Command.prototype.hasCreateDomain = function () {
  return jspb.Message.getField(this, 7) != null;
};

proto.iroha.protocol.Command.prototype.getCreateRole = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.CreateRole, 8);
};

proto.iroha.protocol.Command.prototype.setCreateRole = function (value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearCreateRole = function () {
  this.setCreateRole(undefined);
};

proto.iroha.protocol.Command.prototype.hasCreateRole = function () {
  return jspb.Message.getField(this, 8) != null;
};

proto.iroha.protocol.Command.prototype.getDetachRole = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.DetachRole, 9);
};

proto.iroha.protocol.Command.prototype.setDetachRole = function (value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearDetachRole = function () {
  this.setDetachRole(undefined);
};

proto.iroha.protocol.Command.prototype.hasDetachRole = function () {
  return jspb.Message.getField(this, 9) != null;
};

proto.iroha.protocol.Command.prototype.getGrantPermission = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.GrantPermission, 10);
};

proto.iroha.protocol.Command.prototype.setGrantPermission = function (value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearGrantPermission = function () {
  this.setGrantPermission(undefined);
};

proto.iroha.protocol.Command.prototype.hasGrantPermission = function () {
  return jspb.Message.getField(this, 10) != null;
};

proto.iroha.protocol.Command.prototype.getRemoveSignatory = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.RemoveSignatory, 11);
};

proto.iroha.protocol.Command.prototype.setRemoveSignatory = function (value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearRemoveSignatory = function () {
  this.setRemoveSignatory(undefined);
};

proto.iroha.protocol.Command.prototype.hasRemoveSignatory = function () {
  return jspb.Message.getField(this, 11) != null;
};

proto.iroha.protocol.Command.prototype.getRevokePermission = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.RevokePermission, 12);
};

proto.iroha.protocol.Command.prototype.setRevokePermission = function (value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearRevokePermission = function () {
  this.setRevokePermission(undefined);
};

proto.iroha.protocol.Command.prototype.hasRevokePermission = function () {
  return jspb.Message.getField(this, 12) != null;
};

proto.iroha.protocol.Command.prototype.getSetAccountDetail = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.SetAccountDetail, 13);
};

proto.iroha.protocol.Command.prototype.setSetAccountDetail = function (value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearSetAccountDetail = function () {
  this.setSetAccountDetail(undefined);
};

proto.iroha.protocol.Command.prototype.hasSetAccountDetail = function () {
  return jspb.Message.getField(this, 13) != null;
};

proto.iroha.protocol.Command.prototype.getSetAccountQuorum = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.SetAccountQuorum, 14);
};

proto.iroha.protocol.Command.prototype.setSetAccountQuorum = function (value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearSetAccountQuorum = function () {
  this.setSetAccountQuorum(undefined);
};

proto.iroha.protocol.Command.prototype.hasSetAccountQuorum = function () {
  return jspb.Message.getField(this, 14) != null;
};

proto.iroha.protocol.Command.prototype.getSubtractAssetQuantity = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.SubtractAssetQuantity, 15);
};

proto.iroha.protocol.Command.prototype.setSubtractAssetQuantity = function (value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearSubtractAssetQuantity = function () {
  this.setSubtractAssetQuantity(undefined);
};

proto.iroha.protocol.Command.prototype.hasSubtractAssetQuantity = function () {
  return jspb.Message.getField(this, 15) != null;
};

proto.iroha.protocol.Command.prototype.getTransferAsset = function () {
  return jspb.Message.getWrapperField(this, proto.iroha.protocol.TransferAsset, 16);
};

proto.iroha.protocol.Command.prototype.setTransferAsset = function (value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.iroha.protocol.Command.oneofGroups_[0], value);
};

proto.iroha.protocol.Command.prototype.clearTransferAsset = function () {
  this.setTransferAsset(undefined);
};

proto.iroha.protocol.Command.prototype.hasTransferAsset = function () {
  return jspb.Message.getField(this, 16) != null;
};

goog.object.extend(exports, proto.iroha.protocol);