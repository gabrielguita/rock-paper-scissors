module.exports = {
	cssmin: {
		options: {
			keepSpecialComments: 0
		},
		src: ['<%= dir.src %>/../css/main.css'],
		dest: '<%= dir.dist %>css/main.css'
	}
};
