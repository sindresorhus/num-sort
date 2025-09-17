function assertNumberOrBigInt(value) {
	if (typeof value !== 'number' && typeof value !== 'bigint') {
		throw new TypeError('Expected a number or bigint');
	}
}

export function numberSortAscending(left, right) {
	assertNumberOrBigInt(left);
	assertNumberOrBigInt(right);

	if (Number.isNaN(left)) {
		return -1;
	}

	if (Number.isNaN(right)) {
		return 1;
	}

	if (left < right) {
		return -1;
	}

	if (left > right) {
		return 1;
	}

	return 0;
}

export function numberSortDescending(left, right) {
	assertNumberOrBigInt(left);
	assertNumberOrBigInt(right);

	if (Number.isNaN(left)) {
		return 1;
	}

	if (Number.isNaN(right)) {
		return -1;
	}

	if (left > right) {
		return -1;
	}

	if (left < right) {
		return 1;
	}

	return 0;
}
