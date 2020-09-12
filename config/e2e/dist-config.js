//@ts-check
const { createDistUrl } = require('./base-urls');
const { useDefaultConfig } = require('./default-config');

/**
 * @param { import('../project-info').ProjectInfo } projectInfo
 */
function useDistConfig(projectInfo) {
  const config = useDefaultConfig(projectInfo);
  config.baseUrl = createDistUrl(projectInfo.name);
  return config;
}

exports.useDistConfig = useDistConfig;
