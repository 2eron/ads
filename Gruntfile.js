module.exports = function  (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// connect
		connect: {
			server: {
				options: {
					port: 3001,
					base: 'demo'
					// hostname: '*'
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('server', ['connect']);

}