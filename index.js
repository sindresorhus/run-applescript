import process from 'node:process';
import execa from 'execa';

export async function runAppleScript(script, humanReadableOutput = true) {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const humanReadableFlag = humanReadableOutput ? [] : ['-ss'];

	const {stdout} = await execa('osascript', ['-e', script, ...humanReadableFlag]);
	return stdout;
}

export function runAppleScriptSync(script, humanReadableOutput = true) {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const humanReadableFlag = humanReadableOutput ? [] : ['-ss'];

	const {stdout} = execa.sync('osascript', ['-e', script, ...humanReadableFlag]);
	return stdout;
}
