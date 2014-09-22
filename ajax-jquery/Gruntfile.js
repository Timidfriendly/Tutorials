/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
//            dist: {
//                src: ['lib/<%= pkg.name %>.js'],
//                dest: 'dist/<%= pkg.name %>.js'
//            }
            dist: {
               // src: ['css/*.css'],
                src: ['css/main.css', 'css/normalize.css', 'css/tweaks.css'],
                dest: 'css/buildcss.min.css'
            }

        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                globals: {
                    jQuery: true
                }
            },

            gruntfile: {
                src: 'Gruntfile.js'
            },
//      lib_test: {
//        src: ['lib/**/*.js', 'test/**/*.js']
//      },
            dist: {
                src: ['js/main.js', 'js/main-min.js']
            }
        },
        nodeunit: {
            files: ['test/**/*_test.js']
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
//      lib_test: {
//        files: '<%= jshint.lib_test.src %>',
//        tasks: ['jshint:lib_test', 'nodeunit']
//      },
            dist: {
                files: '<%= jshint.dist.src %>',
                tasks: ['jshint:dist', 'nodeunit']
            },

            sass: {
                files: ['scss/*.scss'],
                tasks: ['compass']

            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task.
    grunt.registerTask('default', ['jshint', 'nodeunit', 'concat', 'uglify', 'compass']);

};
