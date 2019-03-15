const { exec } = require('child_process');
const waitOn = require('wait-on');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./cypress.json'));
const cypress = require('cypress');

// TODO Check for built application

const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || 3000;
const mockHost = process.env.MOCK_HOST || 'http://localhost';
const mockPort = process.env.MOCK_PORT || 3003;

console.log('Starting test services...');
// Run mock-api
const mockEnv = {
  MOCK_HOST: mockHost,
  MOCK_PORT: mockPort,
};
const mockServer = exec('node ./mocks/start.js', { env: mockEnv });
const devEnv = {
  HOST: host,
  PORT: port,
};
const devStart = exec('node ./src/startServer.js', { env: devEnv });

const resources = [
  `${host}:${port}`.replace(/^(https?)/, '$1-get'),
  `${mockHost}:${mockPort}`.replace(/^(https?)/, '$1-get'),
];
waitOn({
  resources,
  log: false,
}).then(() => {
  console.log('Starting Cypress test suite...');
  cypress.run(config)
    .then(({ totalFailed}) => {
      process.exitCode = totalFailed;
      mockServer.kill();
      devStart.kill();
    }).catch((err) => {
      console.log('CYPRESS ERR', err);
      mockServer.kill();
      devStart.kill();
      process.exitCode = 1;
    })
}).catch(err => {
  console.log('WAIT ERROR!', err);
  process.exitCode = 1;
});