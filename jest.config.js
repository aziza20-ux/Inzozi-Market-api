const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** Jest should run TS test files only (ignore built JS/empty stubs). */
const transformIgnorePatterns = ['<rootDir>/dist/', '<rootDir>/src/tests/.*\\.js$'];

/** @type {import("jest").Config} **/
module.exports = {
  testMatch: ['**/src/tests/**/*.test.ts'],
  moduleNameMapper: {
    '^\\./config/swagger\\.js$': '<rootDir>/src/config/swagger.ts',
    '^\\./swagger\\.js$': '<rootDir>/src/swagger.ts',
    '^\\.\\./index\\.js$': '<rootDir>/src/index.ts',
    '^\\.\\./app\\.js$': '<rootDir>/src/app.ts',
    '^\\./routes/(.*)\\.js$': '<rootDir>/src/routes/$1.ts',
    '^\\./(.*\\.routes)\\.js$': '<rootDir>/src/routes/v1/$1.ts',
    '^(?:\\.\\./)+(middleware|controllers|config|services|routes|validators)/(.*)\\.js$':
      '<rootDir>/src/$1/$2.ts',
  },
  transformIgnorePatterns,
  testEnvironment: 'node',
  testTimeout: 20000,
  transform: {
    ...tsJestTransformCfg,
  },
};
