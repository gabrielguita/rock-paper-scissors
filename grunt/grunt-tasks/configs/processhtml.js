module.exports = function (grunt) {
	'use strict';

	return {
		indexhtml: {
			options: {
				data: {
					branch: grunt.option('CSV_branch')
				}
			},
			files: [{
				expand: true,
				cwd: '<%= dir.dist %>',
				src: ['index.html'],
				dest: '<%= dir.dist %>'
			}]
		}
	};

}
;
