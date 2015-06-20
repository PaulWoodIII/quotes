module.exports = function(grunt) {

  grunt.config.set('mocha_istanbul', {
    coverage: {
      src: 'tests', // the folder, not the files
      options: {
        coverageFolder: 'coverage',
        mask: '**/*.spec.js',
        root: 'api/',
        reporter: 'mocha-junit-reporter',
        slow: 2000,
        timeout: 10000,
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-istanbul');

};