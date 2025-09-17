# num-sort

> Sort an array of numbers

## Install

```sh
npm install num-sort
```

## Usage

```js
import {numberSortAscending, numberSortDescending} from 'num-sort';

[9, -3, -Infinity, 24, NaN].sort(numberSortAscending);
//=> [NaN, -Infinity, -3, 9, 24]

[9n, 3n, 24n, -5n].sort(numberSortAscending);
//=> [-5n, 3n, 9n, 24n]

[9, -3, -Infinity, 24, NaN].sort(numberSortDescending);
//=> [24, 9, -3, -Infinity, NaN]

[9n, 3n, 24n, -5n].sort(numberSortDescending);
//=> [24n, 9n, 3n, -5n]
```

## API

### numberSortAscending

Ascending sort comparator.

Supports both `number` and `bigint` types.

### numberSortDescending

Descending sort comparator.

Supports both `number` and `bigint` types.

## Related

- [alpha-sort](https://github.com/sindresorhus/alpha-sort) - Alphabetically sort an array of strings

