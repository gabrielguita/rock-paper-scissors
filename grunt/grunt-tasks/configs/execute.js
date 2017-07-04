/* global process */

module.exports = function () {
	'use strict';

	// Files to compile from ES6 to ES5
	// the 'file' parameter is relative to /swapp-prorail/src/js/
	var es6toes5Filelist = [
		{
			file: 'properties.js',
			builderConfig: {
				meta: {
					'properties.js': {
						build: true
					}
				}
			}
		},
		{ file: 'i18n/en.js' },
		{ file: 'i18n/nl.js' }
	];

	function build(source, target, grunt, async, builderConfig) {
		grunt.log.writeln('Starting systemjs build');

		var workdir = process.cwd();
		process.chdir('src');

		var done = async(),
			Builder = require('systemjs-builder'),
			builder = new Builder('', 'js/system.conf.js'),
			builderOptions = {
				minify: false,
				sourceMaps: true,
				lowResSourceMaps: false,
				mangle: false,
				sourceMapContents: true
			};

		if(builderConfig){
			builder.config(builderConfig);
		}
		builder.bundle(source, target, builderOptions)
			.then(function() {
				grunt.log.writeln('build complete');
				done();
			}).catch(function(err) {
			grunt.log.writeln(err);
			grunt.log.writeln('systemjs build failed');
			done(err);
		}).finally(function() {
				// change back to the original working dir
				process.chdir(workdir);
			}
		);
	}

	return {
		buildSystemjs: {
			call: function (grunt, options, async) {
				var distDir = process.cwd() + '/' + grunt.config.get('dir.dist'),
					app = grunt.config.get('applicationName'),
					source = 'app/main.js',
					target = distDir + '/' + app + '.js';

				build(source, target, grunt, async);
			}
		},
		buildExcludedFiles: {
			call: function (grunt, options, async) {
				grunt.config.set('execute.es6toes5Filelist', es6toes5Filelist);

				for (var i = 0; i < es6toes5Filelist.length; i++) {
					grunt.task.run('execute:es6toes5:' + i);
				}
			}
		},
		es6toes5: {
			call: function (grunt, options, async) {
				var configObject = grunt.config.get('execute.es6toes5Filelist')[grunt.task.current.args[0]],
					distDir = process.cwd() + '/' + grunt.config.get('dir.dist');

				build(configObject.file, distDir + '/js/' + configObject.file, grunt, async, configObject.builderConfig);
			}
		}
	};
};