import test from 'ava';
import numSort from '.';

test('main', t => {
	t.deepEqual([9, 3, 24].sort(numSort.ascending), [3, 9, 24]);
	t.deepEqual([9, 3, 24].sort(numSort.descending), [24, 9, 3]);
});
