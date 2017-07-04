module.exports = function(grunt) {
	'use strict';

	if (process.platform === 'linux') {
		grunt.registerTask('test', 'Run unit test in headless browser on linux machine', [
			'env:xvfb',
			'karma:unit'
		]);
	} else {
		grunt.registerTask('test', 'Run unit tests', [
			'karma:unit'
		]);
	}
};
