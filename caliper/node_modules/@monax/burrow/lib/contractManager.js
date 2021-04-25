/**
 * @file contractManager.js
 * @author Dennis Mckinnon
 * @date 2018
 * @module contracts
 */

var Contract = require('./contracts/contract')

function ContractManager (burrow, options) {
  options = Object.assign({objectReturn: false}, options)
  this.burrow = burrow
  this.objectReturn = options.objectReturn
}

/**
 * Should be called to create new contract on a blockchain
 *
 * @method new
 * @param {Object} abi object (required)
 * @param {string} byteCode - Hex encoded bytecode of contact
 * @param {*} [contract] constructor param1 (optional)
 * @param {*} [contract] constructor param2 (optional)
 * @param {Function} callback (optional)
 * @returns {Contract} returns a promise if no callback provided
 */
ContractManager.prototype.deploy = function () {
  // parse arguments
  var callback = null

  var args = Array.prototype.slice.call(arguments)
  if (typeof args[args.length - 1] === 'function') {
    callback = args.pop()
  }

  // TODO just pass in the bytecode and set it don't do this merging
  var abi = args.shift()
  var byteCode = args.shift()

  var contract = new Contract(abi, null, byteCode, this.burrow, this.objectReturn)
  var P = contract._constructor.apply(contract, args).then((address) => { contract.address = address; return contract })

  if (callback) {
    P.then((contract) => { return callback(null, contract) })
      .catch((err) => { return callback(err) })
  } else {
    return P.then(() => { return contract })
  }
}

/**
 * Creates a contract object interface from an abi
 *
 * @method new
 * @param {Object} abi - abi object for contract
 * @param {string} byteCode - Hex encoded bytecode of contact [can be null]
 * @param {string} address - default contract address [can be null]
 * @returns {Contract} returns contract interface object
 */
ContractManager.prototype.new = function (abi, byteCode, address) {
  return new Contract(abi, address, byteCode, this.burrow, this.objectReturn)
}

module.exports = ContractManager
