import test from 'ava';
import {runAppleScript, runAppleScriptSync} from './index.js';

test('async', async t => {
	t.is(await runAppleScript('return "unicorn"'), 'unicorn');
});

test('sync', t => {
	t.is(runAppleScriptSync('return "unicorn"'), 'unicorn');
});

test('non human readable output async', async t => {
	t.is(await runAppleScript('return "unicorn"', {humanReadableOutput: false}), '"unicorn"');
});

test('non human readable output sync', t => {
	t.is(runAppleScriptSync('return "unicorn"', {humanReadableOutput: false}), '"unicorn"');
});

test('non human readable output (arrays) async', async t => {
	t.is(await runAppleScript('return {"unicorn"}', {humanReadableOutput: false}), '{"unicorn"}');
});

test('non human readable output (arrays) sync', t => {
	t.is(runAppleScriptSync('return {"unicorn"}', {humanReadableOutput: false}), '{"unicorn"}');
});
