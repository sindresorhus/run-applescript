import test from 'ava';
import fn from './';

test(async t => {
	t.is(await fn('return "unicorn"'), 'unicorn');
});
