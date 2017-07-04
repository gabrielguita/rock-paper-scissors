module.exports = {
	buildnumber: {
		options: {
			patterns: [
				{
					match: 'build-number',
					replacement: '<%= pkg.version %> (<%= buildDateTime %>)'
				},
				{
					match: 'base-href',
					replacement: '/swapp-<%= CSV_branch %>/'
				},
				{
					match: 'base-url',
					replacement: 'swapp-<%= CSV_branch %>'
				}
			],
			prefix: '@@',
			processContentExclude: '**/*{gif,jpg,png,ttf,woff,woff2,eot,svg}'
		},
		expand: true,
		cwd: '<%= dir.dist %>',
		src: ['**/*.*'],
		dest: '<%= dir.dist %>'
	}
};
