"use strict";

var _protobufjs = _interopRequireDefault(require("protobufjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_protobufjs.default.load('src/raw/transaction.proto', function (err, root) {
  console.log(root);
  if (err) throw err; // console.log(root)

  var a = root.lookupType('Transaction.Payload.ReducedPayload'); // // Exemplary payload

  var payload = {
    awesomeField: "AwesomeString"
  }; // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)

  var errMsg = a.verify(payload);
  if (errMsg) throw Error(errMsg); // Create a new message

  var message = a.create(payload); // or use .fromObject if conversion is necessary

  console.log(message); // console.log(a)

  return message;
});