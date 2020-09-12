//@ts-check
const { setBaseOptions } = require('./set-base-options');
const { addCoverage } = require('./add-coverage');
const { reportMochaStyle } = require('./report-mocha');
const { launchChromeHeadless } = require('./launch-chrome-headless');

/**
 * create default config for most porjects
 *
 * @param { import('../project-info').ProjectInfo } projectInfo
 */
function useDefaultConfig(projectInfo) {
  return function (config) {
    setBaseOptions(config);
    reportMochaStyle(config);
    launchChromeHeadless(config);
    addCoverage(projectInfo.name)(config);
  };
}

exports.useDefaultConfig = useDefaultConfig;
