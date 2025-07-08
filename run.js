const { execSync } = require('child_process');

const env = process.argv[2];

execSync(`node setup.js ${env}`, { stdio: 'inherit' });

const commandRun = [
  `npx newman run ./collections/${env}.jsonplaceholder.postman_collection.json`,
  `-e ./environments/${env}.postman_environment.json`,
  `-r cli,allure`,
  `--reporter-allure-export ./allure-results`
].join(' ');

execSync(commandRun, { stdio: 'inherit' });
