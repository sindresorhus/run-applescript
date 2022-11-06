import test from 'ava';
import {runAppleScript, runAppleScriptSync} from './index.js';

test('async', async t => {
	t.is(await runAppleScript('return "unicorn"'), 'unicorn');
});

test('sync', t => {
	t.is(runAppleScriptSync('return "unicorn"'), 'unicorn');
});

test('output flags async', async t => {
	t.is(await runAppleScript('return {"unicorn"}', false), '{"unicorn"}');
});

test('output flags sync', t => {
	t.is(runAppleScriptSync('return {"unicorn"}', false), '{"unicorn"}');
});
