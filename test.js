import test from 'ava';
import numberSort from '.';

test('main', t => {
	t.deepEqual([9, 3, 24].sort(numberSort.ascending), [3, 9, 24]);
	t.deepEqual([9, 3, 24].sort(numberSort.descending), [24, 9, 3]);
});

test('supports NaN', t => {
	t.deepEqual([9, -3, -Infinity, 24, NaN].sort(numberSort.ascending), [NaN, -Infinity, -3, 9, 24]);
	t.deepEqual([9, -3, -Infinity, 24, NaN].sort(numberSort.descending), [24, 9, -3, -Infinity, NaN]);
});
