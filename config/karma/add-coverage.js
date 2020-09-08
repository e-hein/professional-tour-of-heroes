//@ts-check
const path = require('path');
const projectRoot = path.resolve(__dirname, '../../');

/**
 * add confignuration for covarage
 *
 * @param {string} projectName
 */
function addCoverage(projectName) {
  return function (config) {
    config.plugins.push('karma-coverage-istanbul-reporter');
    config.set({
      coverageIstanbulReporter: {
        dir: require('path').join(projectRoot, 'coverage', projectName),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
      },
    });
  };
}
exports.addCoverage = addCoverage;
