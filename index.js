import process from 'node:process';
import execa from 'execa';

export async function runAppleScript(script, {humanReadableOutput = true} = {}) {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const outputArguments = humanReadableOutput ? [] : ['-ss'];

	const {stdout} = await execa('osascript', ['-e', script, outputArguments]);
	return stdout;
}

export function runAppleScriptSync(script, {humanReadableOutput = true} = {}) {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const outputArguments = humanReadableOutput ? [] : ['-ss'];

	const {stdout} = execa.sync('osascript', ['-e', script, ...outputArguments]);
	return stdout;
}
