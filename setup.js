const fs = require('fs');

const envName = process.argv[2];
console.log(envName);

const envFile = `./environments/${envName}.postman_environment.json`;
const dataFile = `./testdata/${envName}.testData.json`;

const env = JSON.parse(fs.readFileSync(envFile, 'utf-8'));
const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

const filtered = env.values.filter(v => v.key !== 'expectedResponses');

filtered.push({
  key: 'expectedResponses',
  value: JSON.stringify(data),
  enabled: true
});

env.values = filtered;

fs.writeFileSync(envFile, JSON.stringify(env, null, 2));