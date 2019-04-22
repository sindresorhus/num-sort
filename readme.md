# num-sort [![Build Status](https://travis-ci.org/sindresorhus/num-sort.svg?branch=master)](https://travis-ci.org/sindresorhus/num-sort)

> Sort an array of numbers


## Install

```
$ npm install num-sort
```


## Usage

```js
const numSort = require('num-sort');

[9, 3, 24].sort(numSort.ascending);
//=> [3, 9, 24]
```


## API

### numSort.ascending

Ascending sort comparator.

### numSort.descending

Descending sort comparator.


## Related

- [alpha-sort](https://github.com/sindresorhus/alpha-sort) - Alphabetically sort an array of strings


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
