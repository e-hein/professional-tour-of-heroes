//@ts-check
const { execSync, spawn } = require('child_process');

execSync('npm run lint', { stdio: 'inherit' });
execSync('npm run clean:coverage');
execSync('npm run coverage', { stdio: 'inherit' });
execSync('npm run build', { stdio: 'inherit' });

execSync('npm run clean:spec-shots');
const server = spawn('npm', ['run', 'serve:dist'], { stdio: 'inherit' });
try {
  execSync('npm run protractor:dist', { stdio: 'inherit' });
} catch (e) {
  server.kill('SIGTERM');
  throw e;
}
server.kill('SIGTERM');
