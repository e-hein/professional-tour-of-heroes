//@ts-check
/**
 * simple interface to create and adjust karma configurations
 *
 * example using all defaults:
 * ```js
 * module.exports = require('../../config/karma')(require('./project-info')).useDefaultConfig
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
    launchChrome: require('./launch-chrome').launchChrome,
    launchCromeHeadless: require('./launch-chrome-headless').launchChromeHeadless,

    useDefaultConfig: require('./default-config').useDefaultConfig(projectInfo),
  }
}

module.exports = createKarmaConfigf;
