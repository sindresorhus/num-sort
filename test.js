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
