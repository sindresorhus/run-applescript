'use strict';
const execa = require('execa');

module.exports = str => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('macOS only'));
	}

	return execa.stdout('osascript', ['-e', str]);
};
