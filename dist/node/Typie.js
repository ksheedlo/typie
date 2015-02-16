/**
 * @license
 * Typie - type safe type coercions for Javascript and Typescript
 * Copyright (c) 2015 Ken Sheedlo
 * License: MIT
 */
var Typie;
(function (Typie) {
    'use strict';
    var toString = Object.prototype.toString;
    function isNumber(x) {
        return toString.call(x) === '[object Number]';
    }
    function isUndefined(x) {
        return x === void 0;
    }
    function toInt(x, base) {
        var base_ = 10;
        if (!isUndefined(base)) {
            if (!isNumber(base)) {
                throw new Error('[Typie:nobase] Base must be a Number, but got ' + base);
            }
            else if (base < 2 || base > 36) {
                throw new Error('[Typie:baserange] Base must be between 2 and 36, but got ' + base);
            }
            else {
                base_ = base;
            }
        }
        return parseInt(x, base_);
    }
    Typie.toInt = toInt;
    function toBoolean(x) {
        return !!x;
    }
    Typie.toBoolean = toBoolean;
    function toFloating(x) {
        return +x;
    }
    Typie.toFloating = toFloating;
})(Typie || (Typie = {}));
module.exports = Typie;
