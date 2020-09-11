const path = require('path');
const projectRoot = path.resolve(__dirname, '../../');

/**
 * @param {string} projectName
 * @returns { { package: string, options: import('webdriver-image-comparison').ClassOptions }}
 */
function createImageComparisonPlugin(projectName) {
  const screenshotPath = path.join(projectRoot, 'spec-shots', );
  return {
    package: 'protractor-image-comparison',
    options: {
        baselineFolder: path.join(screenshotPath, 'baseline', projectName),
        formatImageName: `{tag}`,
        screenshotPath: path.join(screenshotPath, 'local', projectName),
        clearRuntimeFolder: true,
    },
  };
}
exports.createImageComparisonPlugin = createImageComparisonPlugin;
