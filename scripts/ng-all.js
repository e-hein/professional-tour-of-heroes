//@ts-check
const { execSync } = require('child_process');
const buildOrder = require('../config/build-order');
buildOrder.forEach((package) => {
  const cmd = `${process.argv.slice(2).join(' ')} ${package}`;
  console.log(cmd);
  execSync(cmd, { stdio: 'inherit' });
});
