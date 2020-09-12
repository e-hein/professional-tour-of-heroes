//@ts-check
/**
 * simple interface to create and adjust karma configurations
 *
 * example using all defaults:
 * ```js
 * module.exports = require('../../config/karma')(require('./project-info')).useDefaultConfig
 * ```
 *
 * example using debugConfig:
 * ```js
 * module.exports = require('../../config/karma')(require('./project-info')).useDebugConfig
 * ```
 *
 * example skipping coverage:
 * ```js
 * const { setBaseOptions, launchChrome } = require('./config/karma')(require('./project-info'));
 * module.exports = function(config) {
 *   setBaseOptions(config);
 *   launchChrome(config);
 * }
 * ```
 *
 * @param {import('../project-info').ProjectInfo} projectInfo
 */
function createKarmaConfigf(projectInfo) {
  return {
    setBaseOptions: require('./set-base-options').setBaseOptions,
    addCoverage: require('./add-coverage').addCoverage(projectInfo.name),
    launch: {
      chrome: require('./launch-chrome').launchChrome,
      cromeHeadless: require('./launch-chrome-headless').launchChromeHeadless,
    },
    report: {
      reportKarmaJasmineHtml: require('./report-kjhtml').reportKarmaJasmineHtml,
      reportMochaStyle: require('./report-mocha').reportMochaStyle,
    },

    useDefaultConfig: require('./default-config').useDefaultConfig(projectInfo),
    useDebugConfig: require('./debug-config').useDebugConfig,
  }
}

module.exports = createKarmaConfigf;
