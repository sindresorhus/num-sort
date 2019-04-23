# num-sort [![Build Status](https://travis-ci.org/sindresorhus/num-sort.svg?branch=master)](https://travis-ci.org/sindresorhus/num-sort)

> Sort an array of numbers


## Install

```
$ npm install num-sort
```


## Usage

```js
const numberSort = require('num-sort');

[9, 3, 24].sort(numberSort.ascending);
//=> [3, 9, 24]
```


## API

### numberSort.ascending

Ascending sort comparator.

### numberSort.descending

Descending sort comparator.


## Related

- [alpha-sort](https://github.com/sindresorhus/alpha-sort) - Alphabetically sort an array of strings


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
