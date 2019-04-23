'use strict';

function assertNumber(number) {
	if (typeof number !== 'number' || Number.isNaN(number)) {
		throw new TypeError('Expected a number');
	}
}

exports.ascending = (left, right) => {
	assertNumber(left);
	assertNumber(right);
	return left - right;
};

exports.descending = (left, right) => {
	assertNumber(left);
	assertNumber(right);
	return right - left;
};
