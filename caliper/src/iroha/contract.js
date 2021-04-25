'use strict';

const open = function(context, args) {
    return {
        fn: 'createAccount',
        args: {accountName: args.accountName, domainId: context.domain, publicKey: args.publicKey}
    };
};

const query = function(context, args) {

    return {
        fn: 'getAccount',
        args: {accountId: args.accountId}
    };
};

const simple = function(context, args) {
    try {
        switch(args.verb) {
        case 'open':
            return open(context, args);
        case 'query':
            return query(context, args);
        default:
            throw new Error('Unknown verb for "simple" contract');
        }
    } catch(err) {
        console.error(err);
        return {};
    }
};

module.exports.contracts = {
    simple : simple
};
