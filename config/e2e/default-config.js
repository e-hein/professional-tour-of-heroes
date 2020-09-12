//@ts-check
const { createProtractorBaseConfig } = require('./base-config');
const { capabilityChromeHeadless } = require('./capabilities.chrome-headless');
const { localUrl } = require('./base-urls');
const { createImageComparisonPlugin } = require('./plugin-protractor-image-comparison');

/**
 * @param { import('../project-info').ProjectInfo } projectInfo
 */
function useDefaultConfig(projectInfo) {
  const config = createProtractorBaseConfig(projectInfo);
  config.plugins = [createImageComparisonPlugin(projectInfo.name)];
  config.capabilities = capabilityChromeHeadless;
  config.baseUrl = localUrl;
  return config;
}

exports.useDefaultConfig = useDefaultConfig;
