module.exports = {
	on_start: ['<%= dir.dist %>'],
	bower: ['src/bower_components/sw-*', 'src/bower_components/swapp-*'],
	e2e: ['<%= dir.dist %>/teste2e/**/*.json']
};
