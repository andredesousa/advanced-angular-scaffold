// This script starts the mock backend.
// Once the backend is running, its mocking interface can be accessed via HTTP.
// E.g. call http://localhost:3000/endpoints
//
// ng-apimock configuration file, see link for more information:
// https://ngapimock.org/docs/

const devInterface = require('@ng-apimock/dev-interface');
const apimock = require('@ng-apimock/core');
const express = require('express');
const server = express();
const apiRoute = '/endpoints';

apimock.processor.process({
  src: 'e2e/server/mocks',
  patterns: {
    mocks: '**/*.mock.json',
    presets: '**/*.preset.json',
  },
  watch: true,
});

server.set('port', 3000);
server.use(apimock.middleware);
server.use(apiRoute, express.static(devInterface));

server.listen(server.get('port'), () => {
  console.log(
    '@ng-apimock UI is available on http://localhost:' +
      server.get('port') +
      apiRoute,
  );
});
