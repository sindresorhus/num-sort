import test from 'ava';
import numberSort from '.';

test('main', t => {
	t.deepEqual([9, 3, 24].sort(numberSort.ascending), [3, 9, 24]);
	t.deepEqual([9, 3, 24].sort(numberSort.descending), [24, 9, 3]);
	t.deepEqual([1, -1, -Infinity, NaN].sort(numberSort.ascending), [NaN, -Infinity, -1, 1]);
	t.deepEqual([1, -1, -Infinity, NaN].sort(numberSort.descending), [1, -1, -Infinity, NaN]);
});
