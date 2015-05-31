'use strict';
var assert = require('assert');
var test = require('ava');
var numSort = require('./');

test(function (t) {
	assert.deepEqual([9, 3, 24].sort(numSort.asc), [3, 9, 24]);
	assert.deepEqual([9, 3, 24].sort(numSort.desc), [24, 9, 3]);
	t.end();
});
