import test from 'ava';
import runApplescript from '.';

test('async - returns as expected', async t => {
	t.is(await runApplescript('return "unicorn"'), 'unicorn');
});

test('sync - returns as expected', t => {
	t.is(runApplescript.sync('return "unicorn"'), 'unicorn');
});
