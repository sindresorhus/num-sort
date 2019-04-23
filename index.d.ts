export type NumberComparator = (left: number, right: number) => number;

/**
Ascending sort comparator.

@example
```
import numberSort = require('num-sort');

[9, 3, 24].sort(numberSort.ascending);
//=> [3, 9, 24]
```
*/
export const ascending: NumberComparator;

/**
Descending sort comparator.

@example
```
import numberSort = require('num-sort');

[9, 3, 24].sort(numberSort.descending);
//=> [24, 9, 3]
```
*/
export const descending: NumberComparator;
