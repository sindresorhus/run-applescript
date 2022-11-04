/**
Run AppleScript asynchronously.

@param script - The script to run.
@param flags - Output modifier flags.
@returns The script result.

@example
```
import {runAppleScript} from 'run-applescript';

const result = await runAppleScript('return "unicorn"');

console.log(result);
//=> 'unicorn'
```
*/
export function runAppleScript(script: string, flags?: string): Promise<string>;

/**
Run AppleScript synchronously.

@param script - The script to run.
@param flags - Output modifier flags.
@returns The script result.

@example
```
import {runAppleScriptSync} from 'run-applescript';

const result = runAppleScriptSync('return "unicorn"');

console.log(result);
//=> 'unicorn'
```
*/
export function runAppleScriptSync(script: string, flags?: string): string;
