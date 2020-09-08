//@ts-check
const { createProtractorBaseConfig } = require('./base-config');
const { capabilityChromeHeadless } = require('./capabilities.chrome-headless');
const { localUrl } = require('./base-urls');
/**
 * @param { import('../project-info').ProjectInfo } projectInfo
 */
function useDefaultConfig(projectInfo) {
  const config = createProtractorBaseConfig(projectInfo);
  config.capabilities = capabilityChromeHeadless;
  config.baseUrl = localUrl;
  return config;
}

exports.useDefaultConfig = useDefaultConfig;
