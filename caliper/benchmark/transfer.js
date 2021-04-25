'use strict';

module.exports.info = 'transfering money';

let bc, contx;
let account_array;
let initmoney;

module.exports.init = function (blockchain, context, args) {
    const open = require('./open.js');
    if (!args.hasOwnProperty('money')) {
        return Promise.reject(new Error('account.transfer - \'money\' is missed in the arguments'));
    }
    bc = blockchain;
    contx = context;
    initmoney = args.money;
    account_array = open.account_array;

    return Promise.resolve();
};

module.exports.run = function () {
    const account1 = account_array[Math.floor(Math.random() * (account_array.length))];
    const account2 = account_array[Math.floor(Math.random() * (account_array.length))];
    let args;

    if (bc.bcType === 'fabric') {
        args = {
            chaincodeFunction: 'transfer',
            chaincodeArguments: [account1, account2, initmoney.toString()],
        };
    } else if (bc.bcType === 'ethereum') {
        args = {
            verb: 'transfer',
            args: [account1, account2, initmoney]
        };
    } else {
        args = {
            'verb': 'transfer',
            'account1': account1,
            'account2': account2,
            'money': initmoney.toString()
        };
    }

    return bc.invokeSmartContract(contx, 'simple', 'v0', args, 10);

};

module.exports.end = function () {
    return Promise.resolve();
};
