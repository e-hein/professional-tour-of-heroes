//@ts-check
const { setBaseOptions } = require('./set-base-options');
const { launchChrome } = require('./launch-chrome');
const { addCoverage } = require('./add-coverage');

/**
 * create default config for most porjects
 *
 * @param { import('../project-info').ProjectInfo } projectInfo
 */
function useDefaultConfig(projectInfo) {
  return function (config) {
    setBaseOptions(config);
    launchChrome(config);
    addCoverage(projectInfo.name)(config);
  };
}

exports.useDefaultConfig = useDefaultConfig;
