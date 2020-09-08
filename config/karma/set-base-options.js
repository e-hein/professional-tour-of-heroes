// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

/**
 * sets most options of the config object that should be equal for all projects
 *
 * @param {*} config Karma config object
 */
function setBaseOptions(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [],
    singleRun: false,
    restartOnFileChange: true
  });
};

exports.setBaseOptions = setBaseOptions;
