import test from 'ava';
import {numberSortAscending, numberSortDescending} from './index.js';

test('main', t => {
	t.deepEqual([9, 3, 24].sort(numberSortAscending), [3, 9, 24]);
	t.deepEqual([9, 3, 24].sort(numberSortDescending), [24, 9, 3]);
});

test('supports NaN', t => {
	t.deepEqual([9, -3, Number.NEGATIVE_INFINITY, 24, Number.NaN].sort(numberSortAscending), [Number.NaN, Number.NEGATIVE_INFINITY, -3, 9, 24]);
	t.deepEqual([9, -3, Number.NEGATIVE_INFINITY, 24, Number.NaN].sort(numberSortDescending), [24, 9, -3, Number.NEGATIVE_INFINITY, Number.NaN]);
});

test('supports BigInt', t => {
	t.deepEqual([9n, 3n, 24n].sort(numberSortAscending), [3n, 9n, 24n]);
	t.deepEqual([9n, 3n, 24n].sort(numberSortDescending), [24n, 9n, 3n]);
});

test('supports negative BigInt', t => {
	t.deepEqual([9n, -3n, 24n, -5n].sort(numberSortAscending), [-5n, -3n, 9n, 24n]);
	t.deepEqual([9n, -3n, 24n, -5n].sort(numberSortDescending), [24n, 9n, -3n, -5n]);
});

test('supports mixed numbers and BigInt', t => {
	t.deepEqual([9n, 3, 24n, 5].sort(numberSortAscending), [3, 5, 9n, 24n]);
	t.deepEqual([9n, 3, 24n, 5].sort(numberSortDescending), [24n, 9n, 5, 3]);
});

test('supports BigInt larger than MAX_SAFE_INTEGER', t => {
	const bigValue = 9007199254740993n; // Larger than Number.MAX_SAFE_INTEGER
	t.deepEqual([bigValue, 0n, -bigValue, 1n].sort(numberSortAscending), [-bigValue, 0n, 1n, bigValue]);
	t.deepEqual([bigValue, 0n, -bigValue, 1n].sort(numberSortDescending), [bigValue, 1n, 0n, -bigValue]);
});

test('mixed numbers, BigInt, and special values', t => {
	t.deepEqual([Number.POSITIVE_INFINITY, 5n, -3, 10n, Number.NaN, 0].sort(numberSortAscending), [Number.NaN, -3, 0, 5n, 10n, Number.POSITIVE_INFINITY]);
	t.deepEqual([Number.POSITIVE_INFINITY, 5n, -3, 10n, Number.NaN, 0].sort(numberSortDescending), [Number.POSITIVE_INFINITY, 10n, 5n, 0, -3, Number.NaN]);
});

test('equal values maintain stable comparison', t => {
	// When values are equal, they should compare as equal (return 0)
	// The exact order of equal values is determined by the sort algorithm's stability
	const ascending = [5n, 5, 3n, 5n].sort(numberSortAscending);
	const descending = [5n, 5, 3n, 5n].sort(numberSortDescending);

	// Check that smaller/larger values are in the correct position
	t.is(ascending[0], 3n);
	t.true(ascending[1] === 5 || ascending[1] === 5n);
	t.true(ascending[2] === 5 || ascending[2] === 5n);
	t.true(ascending[3] === 5n);

	t.true(descending[0] === 5 || descending[0] === 5n);
	t.true(descending[1] === 5 || descending[1] === 5n);
	t.true(descending[2] === 5n);
	t.is(descending[3], 3n);
});

test('handles negative zero', t => {
	const input = [0, -0, 0n];
	const ascending = [...input].sort(numberSortAscending);
	const descending = [...input].sort(numberSortDescending);

	// All should be treated as zero
	t.is(ascending.length, 3);
	t.is(descending.length, 3);
});

test('handles extreme number values', t => {
	const input = [Number.MAX_VALUE, Number.MIN_VALUE, Number.EPSILON];
	const ascending = [...input].sort(numberSortAscending);

	t.is(ascending[0], Number.MIN_VALUE);
	t.is(ascending[1], Number.EPSILON);
	t.is(ascending[2], Number.MAX_VALUE);
});

test('comparator returns only valid values', t => {
	// Test that all combinations return -1, 0, or 1
	const testCases = [
		[1, 2],
		[2, 1],
		[1, 1],
		[1n, 2n],
		[2n, 1n],
		[1n, 1n],
		[1, 2n],
		[2n, 1],
		[1n, 1],
		[Number.NaN, 1],
		[1, Number.NaN],
		[Number.NaN, Number.NaN],
		[Number.POSITIVE_INFINITY, 1],
		[1, Number.POSITIVE_INFINITY],
		[Number.NEGATIVE_INFINITY, 1],
		[1, Number.NEGATIVE_INFINITY]
	];

	for (const [a, b] of testCases) {
		const ascResult = numberSortAscending(a, b);
		const descResult = numberSortDescending(a, b);

		t.true([-1, 0, 1].includes(ascResult), `Invalid ascending result for [${a}, ${b}]: ${ascResult}`);
		t.true([-1, 0, 1].includes(descResult), `Invalid descending result for [${a}, ${b}]: ${descResult}`);

		// Test that ascending and descending are opposite (except for equal values)
		if (ascResult !== 0) {
			t.is(ascResult, -descResult, `Ascending and descending should be opposite for [${a}, ${b}]`);
		}
	}
});
