import {expectType} from 'tsd';
import runApplescript from '.';

expectType<Promise<string>>(runApplescript('return "unicorn"'));
expectType<string>(runApplescript.sync('return "unicorn"'));
