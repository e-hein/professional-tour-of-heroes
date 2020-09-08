//@ts-check
const { createProtractorBaseConfig } = require('./base-config');
const { capabilityChrome } = require('./capabilities.chrome');
const { localUrl } = require('./base-urls');
/**
 * @param { import('../project-info').ProjectInfo } projectInfo
 */
function useDefaultConfig(projectInfo) {
  const config = createProtractorBaseConfig(projectInfo);
  config.capabilities = capabilityChrome;
  config.baseUrl = localUrl;
  return config;
}

exports.useDefaultConfig = useDefaultConfig;
