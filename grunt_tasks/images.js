module.exports = function (grunt, config) {
  grunt.config.merge({
    responsive_images: {
      dist: {
        options: {
          sizes: [{
            width: 320,
            height: 240
          },{
            name: 'large',
            width: 640
          },{
            name: "large",
            width: 1024,
            suffix: "_x2",
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: [config.imgSrcDir + '**.{jpg,gif,png}'],
          cwd: 'src/',
          dest: 'dist/'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          src: [config.imgSrcDir + '*.*'],
          cwd: 'src/',
          dest: 'dist/'
        }]
      }
    }
  });
};