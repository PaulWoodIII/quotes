module.exports = function(grunt) {
    var tasks = ['compileAssets', 'linkAssets'];
    if (process.env.NODE_ENV !== 'test') {
        tasks.push('watch');
    }
    grunt.registerTask('default', tasks);
};
