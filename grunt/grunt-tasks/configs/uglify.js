function getModule(moduleName) {
	'use strict';

	var files = {};
	files['<%= dir.dist %>' + moduleName + '.min.js'] = ['<%= dir.dist %>' + moduleName + '.js'];
	return {
		options: {
			sourceMap: true,
				sourceMapIncludeSources: true,
				sourceMapIn: '<%= dir.dist %>/' + moduleName + '.js.map' // input sourcemap from requirejs
		},
		files: files
			/*[{
			expand: true,
			cwd: '<%= dir.dist %>',
			src: '** / *.js',
			dest: '<%= dir.dist %>',
			ext: '.min.js'
			/ *			rename: function(dest, matchedSrcPath, options) {
			 // return the destination path and filename:
			 return (dest + matchedSrcPath).replace('.jade', '.html');
			 }* /
		}]*/
	};
}

function getModules(grunt) {
	'use strict';

	var mods = {};
	var modules = grunt.config('modules');

	for (var key in modules) {
		if (modules.hasOwnProperty(key)) {
			var m = modules[key];
			mods[m.name] = getModule(m.name);
			console.log('minimizing module:' + m.name);
		}
	}

	return mods;
}

module.exports =  function (grunt, options) {
	'use strict';

	return getModules(grunt);
};

//{
//	output: {
//		options: {
//			sourceMap: true,
//			sourceMapIncludeSources: true,
//			sourceMapIn: 'example/coffeescript-sourcemap.js' // input sourcemap from a previous compilation
//		},
//		files: [{
//			expand: true,
//			cwd: '<%= dir.dist %>',
//			src: '**/*.js',
//			dest: '<%= dir.dist %>',
//			ext: '.min.js'
//			/*			rename: function(dest, matchedSrcPath, options) {
//			 // return the destination path and filename:
//			 return (dest + matchedSrcPath).replace('.jade', '.html');
//			}*/
//		}]
//	}
//};
