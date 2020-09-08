//@ts-check
const { setBaseOptions } = require('./set-base-options');
const { launchChromeHeadless } = require('./launch-chrome-headless');
const { addCoverage } = require('./add-coverage');

/**
 * create default config for most porjects
 *
 * @param { import('../project-info').ProjectInfo } projectInfo
 */
function useDefaultConfig(projectInfo) {
  return function (config) {
    setBaseOptions(config);
    launchChromeHeadless(config);
    addCoverage(projectInfo.name)(config);
  };
}

exports.useDefaultConfig = useDefaultConfig;
