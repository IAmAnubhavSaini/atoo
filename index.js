'use strict';

function arrayToObject(arr, keyPrefix) {
    var kp = keyPrefix ? keyPrefix : '';
    var obj = {};
    arr.reduce(function (prev, curr, index) {
        prev[kp + index] = curr;
        return prev;
    }, obj);
    return obj;
}

module.exports = {
    arrayToObject: arrayToObject
};
