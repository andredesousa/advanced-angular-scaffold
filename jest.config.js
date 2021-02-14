/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  displayName: 'angular11',
  roots: ['<rootDir>/src'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  testMatch: ['<rootDir>/src/app/**/*.spec.ts'],
  transformIgnorePatterns: ['^.+\\.js$'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@api/(.*)': '<rootDir>/dist/@api/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer',
        ],
      },
    },
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageDirectory: 'dist/coverage',
  collectCoverageFrom: ['src/app/**/*.ts', '!src/app/**/*.stories.ts'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
