import test from 'ava';
import {runAppleScript, runAppleScriptSync} from './index.js';

test('async', async t => {
	t.is(await runAppleScript('return "unicorn"'), 'unicorn');
});

test('sync', t => {
	t.is(runAppleScriptSync('return "unicorn"'), 'unicorn');
});

test('async - non-human readable output', async t => {
	t.is(await runAppleScript('return "unicorn"', {humanReadableOutput: false}), '"unicorn"');
});

test('sync - non-human readable output', t => {
	t.is(runAppleScriptSync('return "unicorn"', {humanReadableOutput: false}), '"unicorn"');
});

test('async - non-human readable output (arrays)', async t => {
	t.is(await runAppleScript('return {"unicorn"}', {humanReadableOutput: false}), '{"unicorn"}');
});

test('sync - non-human readable output (arrays)', t => {
	t.is(runAppleScriptSync('return {"unicorn"}', {humanReadableOutput: false}), '{"unicorn"}');
});
