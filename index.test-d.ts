import {expectType} from 'tsd';
import {runAppleScript, runAppleScriptSync} from './index.js';

expectType<Promise<string>>(runAppleScript('return "unicorn"'));
expectType<string>(runAppleScriptSync('return "unicorn"'));
