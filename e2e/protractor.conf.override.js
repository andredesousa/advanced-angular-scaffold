const { config } = require('./protractor.conf');

exports.config = {
  ...config,
  capabilities: {
    ...config.capabilities,
    ...{
      chromeOptions: {
        args: [
          '--window-size=1920,1080',
          '--no-sandbox',
          '--disable-extensions',
          '--disable-dev-shm-usage',
        ],
      },
    },
    maxInstances: 1,
    shardTestFiles: false,
  },
  cucumberOpts: {
    ...config.cucumberOpts,
    ...{
      tags: ['@onlyRunThis', '~@ignore'],
    },
  },
};
