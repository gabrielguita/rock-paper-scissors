module.exports = function (grunt) {
	'use strict';

	grunt.registerTask(
		'sonar',
		[
			'karmaSonar:analysis'
		]
	);
};
