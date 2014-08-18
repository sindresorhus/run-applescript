'use strict';
var execFile = require('child_process').execFile;

module.exports = function (str, cb) {
	execFile('osascript', ['-e', str], function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		cb(err, stdout.trim());
	});
};
