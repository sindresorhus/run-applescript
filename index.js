'use strict';
const execa = require('execa');

module.exports = str => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	return execa('osascript', ['-e', str]).then(res => res.stdout);
};
