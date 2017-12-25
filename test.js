import test from 'ava';
import m from './';

test('returns as expected', async t => {
	t.is(await m('return "unicorn"'), 'unicorn');
});

test('sync returns as expected', t => {
	t.is(m.sync('return "unicorn"'), 'unicorn');
});
