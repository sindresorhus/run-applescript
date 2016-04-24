'use strict';
const execa = require('execa');

module.exports = str => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X is supported'));
	}

	return execa('osascript', ['-e', str]).then(res => res.stdout);
};
