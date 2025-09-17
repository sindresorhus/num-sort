/**
Ascending sort comparator.

@example
```
import {numberSortAscending} from 'num-sort';

[9, -3, -Infinity, 24, NaN].sort(numberSortAscending);
//=> [NaN, -Infinity, -3, 9, 24]

[9n, 3n, 24n, -5n].sort(numberSortAscending);
//=> [-5n, 3n, 9n, 24n]
```
*/
export function numberSortAscending(left: number | bigint, right: number | bigint): number;

/**
Descending sort comparator.

@example
```
import {numberSortDescending} from 'num-sort';

[9, -3, -Infinity, 24, NaN].sort(numberSortDescending);
//=> [24, 9, -3, -Infinity, NaN]

[9n, 3n, 24n, -5n].sort(numberSortDescending);
//=> [24n, 9n, 3n, -5n]
```
*/
export function numberSortDescending(left: number | bigint, right: number | bigint): number;
