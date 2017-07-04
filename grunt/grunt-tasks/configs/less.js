module.exports = {
	less: {
		options: {
			plugins: [new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']})],
			//compress: true,
			//yuicompress: true,
			spawn: false
			//optimization: 2
		},
		files: {
			'<%= dir.src %>/../css/main.css': '<%= dir.src %>/../less/main.less'
		}
	}
};
