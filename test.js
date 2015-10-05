import test from 'ava';
import fn from './';

test(async t => {
	const res = await fn('return "unicorn"');

	t.is(res, 'unicorn');
});