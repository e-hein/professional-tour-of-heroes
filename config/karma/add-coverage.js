//@ts-check
const path = require('path');
const projectRoot = path.resolve(__dirname, '../../');

/**
 * add confignuration for covarage
 *
 * @param {string} projectName
 */
function addCoverage(projectName) {
  const projectFolderName = projectName.replace(/@(\w+)\//, (_all, scope) => scope + '-');
  return function (config) {
    config.plugins.push('karma-coverage-istanbul-reporter');
    config.set({
      coverageIstanbulReporter: {
        dir: require('path').join(projectRoot, 'coverage/project'),
        reports: ['json', 'text-summary'],
        'report-config': {
          json: { file: projectFolderName + '.json' }
        },
        fixWebpackSourcePaths: true
      },
    });
  };
}
exports.addCoverage = addCoverage;
