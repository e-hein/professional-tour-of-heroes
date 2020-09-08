const { createProtractorBaseConfig } = require('./base-config');
const { useDefaultConfig } = require('./default-config');
const { useDistConfig } = require('./dist-config');
const { capabilityChrome } = require('./capabilities.chrome');
const { capabilityChromeHeadless } = require('./capabilities.chrome-headless');
const { localUrl, createDistUrl } = require('./base-urls');

//@ts-check
/**
 * simple interface to create and adjust protractor configurations
 *
 * example that uses chrome (not headless) and dist url:
 * ```js
 * const e2e = require('../config/e2e')(require('../project-info'));
 *
 * const config = e2e.baseConfig;
 * config.capabilities = e2e.capabilities.chrome;
 * config.baseUrl = e2e.urls.dist;
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
      chromeHeadless: capabilityChromeHeadless,
    },
    urls: {
      local: localUrl,
      dist: createDistUrl(projectInfo.name),
    },

    useDefaultConfig: useDefaultConfig(projectInfo),
    useDistConfig: useDistConfig(projectInfo),
  };
}

module.exports = createE2eConfig;
