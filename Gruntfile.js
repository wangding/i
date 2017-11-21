module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: 'js/*.js',
      options: {
        jshintrc: true
      } 
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: 'dist/index.html',
        dest: 'dist/index.html'
      }
    },
    copy: {
      html: {
        src: './index.html',
        dest: './dist/index.html'
      },
      end: {
        files: [
        {expand: true, flatten: true, filter: 'isFile', src: 'dist/index.html', dest: './' },
        {expand: true, flatten: true, filter: 'isFile', src: 'dist/js/bundle.min.js', dest: 'js/'},
        {expand: true, flatten: true, filter: 'isFile', src: 'dist/css/bundle.min.css', dest: 'css/'}]
      }
    },
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'dist/js/bundle.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'dist/css/bundle.css'
      }
    },
    uglify: {
      'dist/js/bundle.min.js': 'dist/js/bundle.js'
    },
    cssmin: {
      'dist/css/bundle.min.css': 'dist/css/bundle.css'
    },
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'
      }
    },
    usemin: {
      html: ['dist/index.html']
    },
    clean: {
      middle: ['js/*', 'css/*'],
      end: ['dist', 'package-lock.json', '.tmp', 'node_modules', 'package.json', 'README.md', 'Gruntfile.js', '.tern-project', '.jshintrc', '.gitignore']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', ['copy:html', 'jshint', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'htmlmin', 'clean:middle', 'copy:end', 'clean:end']);
};
