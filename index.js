'use strict';

function assertNumber(number) {
	if (typeof number !== 'number') {
		throw new TypeError('Expected a number');
	}
}

exports.ascending = (left, right) => {
	if (Number.isNaN(left)) {
		return -1;
	}

	if (Number.isNaN(right)) {
		return 1;
	}

	assertNumber(left);
	assertNumber(right);

	return left - right;
};

exports.descending = (left, right) => {
	if (Number.isNaN(left)) {
		return 1;
	}

	if (Number.isNaN(right)) {
		return -1;
	}

	assertNumber(left);
	assertNumber(right);

	return right - left;
};
