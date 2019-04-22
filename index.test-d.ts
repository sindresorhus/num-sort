import {expectType} from 'tsd';
import numSort = require('.');

expectType<number>(numSort.ascending(1, 2));
expectType<number>(numSort.descending(1, 2));

[9, 3, 24].sort(numSort.ascending);
[9, 3, 24].sort(numSort.descending);
