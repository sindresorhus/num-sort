import test from 'ava';
import x from './';

test(t => {
	t.deepEqual([9, 3, 24].sort(x.asc), [3, 9, 24]);
	t.deepEqual([9, 3, 24].sort(x.desc), [24, 9, 3]);
});
