/**
Run AppleScript asynchronously.

@param script - The script to run.
@returns The script result.

@example
```
import {runAppleScript} from 'run-applescript';

const result = await runAppleScript('return "unicorn"');

console.log(result);
//=> 'unicorn'
```
*/
export function runAppleScript(script: string): Promise<string>;

/**
Run AppleScript synchronously.

@param script - The script to run.
@returns The script result.

@example
```
import {runAppleScriptSync} from 'run-applescript';

const result = runAppleScriptSync('return "unicorn"');

console.log(result);
//=> 'unicorn'
```
*/
export function runAppleScriptSync(script: string): string;
