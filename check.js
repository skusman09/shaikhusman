const { execSync } = require('child_process');

try {
  console.log('Running astro check...');
  const check = execSync('npx astro check', { encoding: 'utf-8', stdio: 'pipe' });
  console.log(check);
} catch (e) {
  console.error('ASTRO CHECK FAILED:');
  console.error(e.stdout);
  console.error(e.stderr);
}

try {
  console.log('Running eslint...');
  const lint = execSync('npx eslint .', { encoding: 'utf-8', stdio: 'pipe' });
  console.log(lint);
} catch (e) {
  console.error('ESLINT FAILED:');
  console.error(e.stdout);
  console.error(e.stderr);
}
