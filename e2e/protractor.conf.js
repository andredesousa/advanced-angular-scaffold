/**
 * Protractor configuration file, see link for more information:
 * https://github.com/angular/protractor/blob/master/lib/config.ts
 *
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 15000,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless',
        '--disable-gpu',
        '--window-size=1920,1080',
        '--no-sandbox',
        '--disable-extensions',
        '--disable-dev-shm-usage',
      ],
    },
    maxInstances: 4,
    shardTestFiles: true,
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    format: 'json:dist/e2e/results.json',
    require: ['./src/steps/**/*.ts'],
  },
  specs: ['./src/features/*.feature'],
  suites: {
    functional: './src/features/*-functional.feature',
    visual: './src/features/*-visual.feature',
  },
  plugins: [
    {
      package: 'protractor-multiple-cucumber-html-reporter-plugin',
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
        removeOriginalJsonReportFile: true,
        displayDuration: true,
        saveCollectedJSON: true,
        reportPath: 'dist/e2e/',
      },
    },
    {
      package: 'protractor-image-comparison',
      options: {
        autoSaveBaseline: true,
        clearRuntimeFolder: true,
        baselineFolder: 'e2e/src/baseline/',
        screenshotPath: 'dist/visual/',
        formatImageName: `{tag}`,
      },
    },
    {
      package: '@ng-apimock/protractor-plugin',
      options: {
        globalName: 'ngApimock',
      },
    },
  ],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json'),
    });

    global.expect = require('expect');
  },
};
