(function () {
	'use strict';

	module.exports = function(grunt) {
		// define settings
		var settings = {
			dir: {
				src: 'src/js',
				dist: 'dist/',
				doc: 'doc/',
				temp: 'temp',
				coverage: 'temp/coverage/'
			},
			pkg: grunt.file.readJSON('bower.json'),

			buildDateTime: grunt.template.today('yyyy-mm-dd HH:MM:ss'),

			applicationName: 'rockpaperscissors',

			modules: [
				{
					// The requirejs include which makes the application:
					name: 'rockpaperscissors'
				}
			],
		};

		//autoload all grunt plugins mentioned in devDependencies package.json
		require('load-grunt-tasks')(grunt);

		grunt.config.init(settings);

		// load task configurations
		var configs = require('load-grunt-configs')(grunt, {
			config: {
				src: 'grunt/grunt-tasks/configs/*.js'
			}
		});

		grunt.config.merge(configs);

		// load task definitions
		grunt.loadTasks('grunt/grunt-tasks');

		// finally overwrite configuration with project specific information

		// load local-task configurations
		var localconfigs = require('load-grunt-configs')(grunt, {
			config: {
				src: 'grunt-tasks-local/configs/*.js'
			}
		});
		grunt.config.merge(localconfigs);

		// load local task definitions
		// grunt.loadTasks('grunt-tasks-local'); DONT USE THIS BECAUSE GRUNT IS NOT IS NOT A SUBMODULE HERE !

		// end of local overwrites

		// Time how long tasks take. Can help when optimizing build times
		require('time-grunt')(grunt);
	};
}());
