/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['./js/*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: 'css/*.css'
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: '*.html'
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
    replace: {
      html: {
        src: ['dist/*.html'],
        overwrite: true,
        replacements: [{
          from: 'href="css',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/i@gh-pages/css'
        }, {
          from: 'src="js',
          to: 'src="https://cdn.jsdelivr.net/gh/wangding/i@gh-pages/js'
        }]
      }
    },
    copy: {
      html: {
        src: './index.html',
        dest: './dist/index.html'
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
      'dist/js/bundle.min.js': 'dist/js/bundle.js',
      'dist/js/fork-me-github.js': 'js/fork-me-github.js',
      'dist/js/bsz-page-footer.js': 'js/bsz-page-footer.js'
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
      end: ['dist/css/bundle.css', 'dist/js/bundle.js', '.tmp']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('build', ['copy:html', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'htmlmin', 'replace', 'clean:end']);
};
