module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', 'connect')
}