module.exports = function (grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    var files = ['gruntfile.js', 'app/**/*.js'];

    grunt.initConfig({
        shell: {
          build: {
            command: 'ember build -prod',
            options: {
              stdout: true,
              stdin: false
            }
          }
      }
    });

    grunt.registerTask('build', ['shell:build']);
    grunt.registerTask('default', ['shell:build']);
};
