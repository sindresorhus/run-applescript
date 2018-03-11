'use strict';
const execa = require('execa');

module.exports = script => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('macOS only'));
	}

	return execa.stdout('osascript', ['-e', script]);
};

module.exports.noExec = script => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('macOS only'));
	}

	return execa.stdout('osascript', [script]);
};

module.exports.sync = script => {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	return execa.sync('osascript', ['-e', script]).stdout;
};

module.exports.noExecSync = script => {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	return execa.sync('osascript', [script]).stdout;
};

