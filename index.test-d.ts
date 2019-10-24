import {expectType} from 'tsd';
import runApplescript = require('.');

expectType<Promise<string>>(runApplescript('return "unicorn"'));
expectType<string>(runApplescript.sync('return "unicorn"'));
