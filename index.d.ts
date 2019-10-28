declare const runApplescript: {
	/**
	Run AppleScript.

	@param script - The script to run.
	@returns The script result.

	@example
	```
	import runApplescript = require('run-applescript');

	(async () => {
		const result = await runApplescript('return "unicorn"');

		console.log(result);
		//=> 'unicorn'
	})();
	```
	*/
	(script: string): Promise<string>;

	/**
	Run AppleScript synchronously.

	@param script - The script to run.
	@returns The script result.

	@example
	```
	import runApplescript = require('run-applescript');

	const result = runApplescript.sync('return "unicorn"');

	console.log(result);
	//=> 'unicorn'
	```
	*/
	sync(script: string): string;
}

export = runApplescript;
