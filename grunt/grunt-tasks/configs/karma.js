module.exports = {
	unit: {
		options: {
			configFile: 'test/karma.conf.js',
			singleRun: true,
			reporters: ['spec', 'junit', 'coverage'],

			junitReporter: {
				outputDir: '<%= dir.temp %>'
			}
		}
	}
};
