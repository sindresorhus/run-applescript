import test from 'ava';
import {runAppleScriptAsync, runAppleScriptSync} from './index.js';

test('async', async t => {
	t.is(await runAppleScriptAsync('return "unicorn"'), 'unicorn');
});

test('sync', t => {
	t.is(runAppleScriptSync('return "unicorn"'), 'unicorn');
});
