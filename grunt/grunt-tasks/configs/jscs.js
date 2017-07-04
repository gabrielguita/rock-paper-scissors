module.exports = function () {
	'use strict';

	return {
		src: [
			'Gruntfile.js',
			'<%= dir.src %>/*/**/*.js'
		],
		options: {
			config: '.jscs.json'
		}
	};
};
