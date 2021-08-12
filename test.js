import test from 'ava';
import {runAppleScript, runAppleScriptSync} from './index.js';

test('async', async t => {
	t.is(await runAppleScript('return "unicorn"'), 'unicorn');
});

test('sync', t => {
	t.is(runAppleScriptSync('return "unicorn"'), 'unicorn');
});
