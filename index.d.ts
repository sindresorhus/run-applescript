export type Options = {
	/**
	Modifies the output style.
	If false returns value in recompilable source form.

	@default true
	*/
	readonly humanReadableOutput?: boolean;
};

/**
Run AppleScript asynchronously.

@param script - The script to run.
@param options - Options used when running the script.
@returns The script result.

@example
```
import {runAppleScript} from 'run-applescript';

const result = await runAppleScript('return "unicorn"');

console.log(result);
//=> 'unicorn'
```

@example
```
import {runAppleScript} from 'run-applescript';

const options = {
    humanReadableOutput: false
}
const result = await runAppleScript('return "unicorn"', options);

console.log(result);
//=> '"unicorn"'
```
*/
export function runAppleScript(script: string, options?: Options): Promise<string>;

/**
Run AppleScript synchronously.

@param script - The script to run.
@param options - Options used when running the script.
@returns The script result.

@example
```
import {runAppleScriptSync} from 'run-applescript';

const result = runAppleScriptSync('return "unicorn"');

console.log(result);
//=> 'unicorn'
```

@example
```
import {runAppleScript} from 'run-applescript';

const options = {
    humanReadableOutput: false
}
const result = await runAppleScript('return "unicorn"', options);

console.log(result);
//=> '"unicorn"'
```
*/
export function runAppleScriptSync(script: string, options?: Options): string;
