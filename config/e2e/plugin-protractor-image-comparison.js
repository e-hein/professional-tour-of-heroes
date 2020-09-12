const path = require('path');
const projectRoot = path.resolve(__dirname, '../../');

const screenshotPath = path.join(projectRoot, 'spec-shots');

/**
 * @param {string} projectName
 * @returns { { package: string, options: import('webdriver-image-comparison').ClassOptions }}
 */
function createImageComparisonPlugin(projectName) {
  return {
    package: 'protractor-image-comparison',
    options: {
        baselineFolder: path.join(screenshotPath, 'baseline'),
        formatImageName: `${projectName}/{tag}`,
        screenshotPath: screenshotPath,
        clearRuntimeFolder: true,
    },
  };
}
exports.createImageComparisonPlugin = createImageComparisonPlugin;
