/**
 * Run Applescript
 *
 * @param script The script to run.
 * @returns The script result.
 */
declare function runApplescript(script: string): Promise<string>;

declare namespace runApplescript {
	/**
	 * Run Applescript sync
	 *
	 * @param script The script to run.
	 * @returns The script result.
	 */
	function sync(script: string): string;
}

export default runApplescript;
