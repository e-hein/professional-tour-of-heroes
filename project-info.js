//@ts-check

const packageJson = require('./package.json');

/**
 * @type { import('./config/project-info').ProjectInfo }
 */
const projectInfo = {
  name: packageJson.name,
  root: __dirname,
};

module.exports = projectInfo;
