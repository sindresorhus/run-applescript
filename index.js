'use strict';
const execa = require('execa');

module.exports = str => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('macOS only'));
	}

	return execa.stdout('osascript', ['-e', str]);
};

module.exports.sync = str => {
	if (process.platform !== 'darwin') {
		throw new Error('macOS only');
	}

	return execa.sync('osascript', ['-e', str]).stdout;
};
