var modRewrite = require('connect-modrewrite');
var proxy = require('http-proxy-middleware');

module.exports = {
	browserSync: {
		bsFiles: {
			src: [
				'./src/css/*.css',
				'./src/js/**/*.js',
				'./src/**/*.html'
			]
		},
		options: {
			browser: false,
			startPath: '/rockpaperscissors',
			server: {
				baseDir: './src',
				middleware: [
					modRewrite([
						'^[^\\.]*$ /index.html [L]'
					])
				]
			}
		}
	}
};


