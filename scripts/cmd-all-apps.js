//@ts-check
const { execSync } = require('child_process');
const buildOrder = require('../config/build-order');
const angularJson = require('../angular.json');
const path = require('path');
const cmd = process.argv.slice(2).join(' ');

buildOrder.forEach((projectName) => {
  const project = angularJson.projects[projectName];
  if (!project) {
    console.error(`no project config found for "${projectName}"`);
    return;
  }

  if (project.projectType !== 'application') {
    console.log(`skip library "${projectName}"`);
    return;
  }

  const projectRoot = project.root;

  if (typeof projectRoot !== 'string' || projectRoot.length < 1) {
    console.error(`no project root found for "${projectName}"`);
    return;
  }

  const cwd = path.resolve(__dirname, '../', projectRoot);

  console.log(`run "${cmd}" in ${cwd}`);
  execSync(cmd, { cwd, stdio: 'inherit' });
});
