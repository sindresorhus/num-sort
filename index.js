'use strict';
var numberIsNan = require('number-is-nan');

function assertNum(x) {
	if (typeof x !== 'number' || numberIsNan(x)) {
		throw new TypeError('Expected a number');
	}
}

exports.asc = function (a, b) {
	assertNum(a);
	assertNum(b);
	return a - b;
};

exports.desc = function (a, b) {
	assertNum(a);
	assertNum(b);
	return b - a;
};
