import process from 'node:process';
import execa from 'execa';

const DEFAULT_OPTIONS = {
	humanReadableOutput: true,
};

export async function runAppleScript(script, options = DEFAULT_OPTIONS) {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const outputArg = options.humanReadableOutput ? [] : ['-ss'];

	const {stdout} = await execa('osascript', ['-e', script, outputArg]);
	return stdout;
}

export function runAppleScriptSync(script, options = DEFAULT_OPTIONS) {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const outputArg = options.humanReadableOutput ? [] : ['-ss'];

	const {stdout} = execa.sync('osascript', ['-e', script, ...outputArg]);
	return stdout;
}
