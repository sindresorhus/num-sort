import {expectType} from 'tsd';
import {numberSortAscending, numberSortDescending} from './index.js';

expectType<number>(numberSortAscending(1, 2));
expectType<number>(numberSortDescending(1, 2));

[9, 3, 24].sort(numberSortAscending);
[9, 3, 24].sort(numberSortDescending);
