'use strict';

module.exports.info  = 'opening accounts';

let account_array = [];
let txnPerBatch;
let initMoney;
let bc, contx;

module.exports.init = function(blockchain, context, args) {
    if(!args.hasOwnProperty('money')) {
        return Promise.reject(new Error('simple.open - \'money\' is missed in the arguments'));
    }

    if(!args.hasOwnProperty('txnPerBatch')) {
        args.txnPerBatch = 1;
    }
    initMoney = args.money;
    txnPerBatch = args.txnPerBatch;
    bc = blockchain;
    contx = context;

    return Promise.resolve();
};

const dic = 'abcdefghijklmnopqrstuvwxyz';

function get26Num(number){
    let result = '';
    while(number > 0) {
        result += dic.charAt(number % 26);
        number = parseInt(number/26);
    }
    return result;
}

let prefix;

function generateAccount() {
    if(typeof prefix === 'undefined') {
        prefix = get26Num(process.pid);
    }
    return prefix + get26Num(account_array.length+1);
}

function generateWorkload() {
    let workload = [];
    for(let i= 0; i < txnPerBatch; i++) {
        let acc_id = generateAccount();
        account_array.push(acc_id);

        if (bc.bcType === 'fabric') {
            workload.push({
                chaincodeFunction: 'open',
                chaincodeArguments: [acc_id, initMoney.toString()],
            });
        } else if (bc.bcType === 'ethereum') {
                workload.push({
                    verb: 'open',
                    args: [acc_id, initMoney]
                });
        } else {
            workload.push({
                'verb': 'open',
                'account': acc_id,
                'money': initMoney
            });
        }
    }
    return workload;
}

module.exports.run = function() {
    let args = generateWorkload();
    return bc.invokeSmartContract(contx, 'simple', 'v0', args, 100);
};

module.exports.end = function() {
    return Promise.resolve();
};

module.exports.account_array = account_array;
