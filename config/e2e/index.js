const { createProtractorBaseConfig } = require('./base-config');
const { useDefaultConfig } = require('./default-config');
const { capabilityChrome } = require('./capabilities.chrome');
const { localUrl } = require('./base-urls');

//@ts-check
/**
 * simple interface to create and adjust protractor configurations
 *
 * example that changes the url:
 * ```js
 * const e2e = require('../config/e2e')(require('../project-info'));
 *
 * const config = e2e.baseConfig;
 * config.capabilities = e2e.capabilities.chrome;
 * config.baseUrl = 'http://example.de';
 *
 * exports.config = config;
 * ```
 * @param {import('../project-info').ProjectInfo} projectInfo
 * @param { boolean } usePreBuiltLibraries will replace path aliases to prebuild libraries in dist
 */
function createE2eConfig(projectInfo, usePreBuiltLibraries = false) {
  return {
    baseConfig: createProtractorBaseConfig(projectInfo, usePreBuiltLibraries),
    capabilities: {
      chrome: capabilityChrome,
    },
    urls: {
      local: localUrl,
    },

    useDefaultConfig: useDefaultConfig(projectInfo),
  };
}

module.exports = createE2eConfig;
