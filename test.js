'use strict';
var test = require('ava');
var runApplescript = require('./');

test(function (t) {
	t.plan(2);

	runApplescript('return "unicorn"', function (err, res) {
		t.assert(!err, err);
		t.assert(res === 'unicorn');
	});
});
