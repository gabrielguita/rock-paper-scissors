module.exports = function () {
	'use strict';
	// virtual display to allow firefox to start
	return {
		// set display variable
		xvfb: {
			DISPLAY: ':99'
		}
	};
};
