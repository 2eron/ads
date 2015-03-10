module.exports = function  (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// compass
		compass: {
            dist: {
                options: {
                    sassDir: 'public/sass',
                    cssDir: 'dist',
                    outputStyle: 'compressed',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'public/sass',
                    cssDir: 'public/css',
                    outputStyle: 'expanded',
                    environment: 'development'
                }
            }

		},
        watch: {
            sass: {
                files: ['public/sass/**/*.scss'],
                tasks: ['compass']
            }
        }
	});

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks

}