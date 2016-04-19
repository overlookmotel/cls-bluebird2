// --------------------
// cls-bluebird2 module
// --------------------

// modules
var Bluebird = require('bluebird/js/release/promise')(),
    wrap = require('shimmer').wrap;

// exports
module.exports = function(ns, Promise) {
    if (!Promise) Promise = Bluebird;

    var async = Promise._async;

    function wrapper(original) {
        return function(fn, receiver, arg) {
            return original.call(this, ns.bind(fn), receiver, arg);
        };
    }

    wrap(async, 'invokeFirst', wrapper);
    wrap(async, 'invokeLater', wrapper);
    wrap(async, 'invoke', wrapper);

    async.settlePromises = function(promise) {
        var fn = ns.bind(promise._settlePromises);

        if (this._trampolineEnabled) {
            this._normalQueue.push(fn, promise, undefined);
            this._queueTick();
        } else {
            this._schedule(function() {
                fn.call(promise);
            });
        }
    };

    wrap(async, 'throwLater', function(original) {
        return function(fn, arg) {
            if (arguments.length === 1) {
                arg = fn;
                fn = function () { throw arg; };
            }

            return original.call(this, ns.bind(fn), arg);
        };
    });

    return Promise;
};
