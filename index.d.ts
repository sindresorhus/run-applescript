/**
Run Applescript

@example
```
const runApplescript = require('run-applescript');

(async () => {
	const result = await runApplescript('return "unicorn"');

	console.log(result);
	//=> 'unicorn'
})();
```

@param script The script to run.
@returns The script result.
*/
declare function runApplescript(script: string): Promise<string>;

declare namespace runApplescript {
	/**
	Run Applescript sync

	@example
	```
	const runApplescript = require('run-applescript');

	const result = runApplescript.sync('return "unicorn"');

	console.log(result);
	//=> 'unicorn'
	```

	@param script The script to run.
	@returns The script result.
	*/
	function sync(script: string): string;
}

export = runApplescript;
