module.exports = function (grunt) {
	'use strict';

	grunt.registerTask(
		'default',
		'Check code, build code',
		[
			'clean:on_start',
			'clean:bower',
			'bower-install-simple',
// 			Activate these commented out steps when build succesfully runs 
// 			'jscs',
// 			'jshint',
 			'styles',
			'buildcode',
			'replace'
		]
	);

	grunt.registerTask(
		'precommit',
		'Check for javascript/style errors and run the test suite',
		[
			'jshint',
			'jscs'
		]
	);

	grunt.registerTask('styles', [
		'cssmin:cssmin',
		'copy:img-to-dist-css',
		'copy:img-to-dist-img',
		'copy:img-to-dist-css-images',
		'copy:fonts-to-dist-fonts'
	]);

	grunt.registerTask(
		'buildcode',
		'Concatinate js, minimize, add AMD and global header',
		[
			'execute:buildSystemjs'
		]
	);

	//TODO: grunt.registerTask('buildcode', 'Concatinate js, minimize, add AMD and global header', ['copy:temp', 'ngtemplates', 'ngAnnotate', 'requirejs']);

};
