import process from 'node:process';
import execa from 'execa';

export async function runAppleScript(script, flags = '') {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const {stdout} = await execa('osascript', ['-e', script, '-s', flags]);
	return stdout;
}

export function runAppleScriptSync(script, flags = '') {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	const {stdout} = execa.sync('osascript', ['-e', script, '-s', flags]);
	return stdout;
}
