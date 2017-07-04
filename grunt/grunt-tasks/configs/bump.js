module.exports = {
	options: {
		files: ['bower.json', 'package.json'],    // keep npm in sync with the bower version.
		updateConfigs: ['pkg'],
		commitMessage: 'prepare automatic release of version %VERSION%',
		commitFiles: ['.'],
		tagName: '%VERSION%',
		tagMessage: 'Automatic release of version %VERSION%',
		push: true,
		pushTo: 'origin'
	}
};
