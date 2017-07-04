module.exports = function (grunt) {
    'use strict';

    grunt.registerTask(
        'serve',
        'Serve locally for development with browsersync',
        [
            'browserSync'
        ]
    );


};
