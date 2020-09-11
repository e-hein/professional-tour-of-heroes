//@ts-check
const { execSync, spawn } = require('child_process');

execSync('npm run lint', { stdio: 'inherit' });
execSync('npm run clean:coverage');
execSync('npm run coverage', { stdio: 'inherit' });
execSync('npm run build', { stdio: 'inherit' });

execSync('npm run clean:spec-shots');
function execProtractorDist() {
  execSync('npm run protractor:dist', { stdio: 'inherit' });
}

if(process.platform === 'win32') {
  execProtractorDist();
} else {
  const server = spawn('npm', ['run', 'serve:dist'], { stdio: 'inherit' });
  try {
    execProtractorDist();
  } catch (e) {
    server.kill('SIGTERM');
    throw e;
  }
  server.kill('SIGTERM');
}
