import {expectType} from 'tsd';
import numberSort = require('.');

expectType<number>(numberSort.ascending(1, 2));
expectType<number>(numberSort.descending(1, 2));

[9, 3, 24].sort(numberSort.ascending);
[9, 3, 24].sort(numberSort.descending);
