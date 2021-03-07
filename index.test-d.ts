import {expectType} from 'tsd';
import {runAppleScriptAsync, runAppleScriptSync} from './index.js';

expectType<Promise<string>>(runAppleScriptAsync('return "unicorn"'));
expectType<string>(runAppleScriptSync('return "unicorn"'));
