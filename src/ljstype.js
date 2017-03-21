"use strict";

const assert = require('assert');

const lisdigit = function(c) {
    return typeof c === 'string' && /^\d$/.test(c.charAt(0));
};

const lisxdigit = function(c) {
    return typeof c === 'string' && /^[0-9a-fA-F]$/.test(c.charAt(0));
};

const lisspace = function(c) {
    return typeof c === 'string' && /^\s$/.test(c.charAt(0));
};

const lislalpha = function(c) {
    return typeof c === 'string' && /^[_a-zA-Z]$/.test(c.charAt(0));
};

const lislalnum = function(c) {
    return typeof c === 'string' && /^[_a-zA-Z0-9]$/.test(c.charAt(0));
};

module.exports.lisdigit   = lisdigit;
module.exports.lislalnum  = lislalnum;
module.exports.lislalpha  = lislalpha;
module.exports.lisspace   = lisspace;
module.exports.lisxdigit  = lisxdigit;