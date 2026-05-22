const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** Jest should run TS test files only (ignore built JS/empty stubs). */
const transformIgnorePatterns = [
  "<rootDir>/dist/",
  "<rootDir>/src/tests/.*\\.js$",
];

/** @type {import("jest").Config} **/
module.exports = {
  testMatch: ["**/src/tests/**/*.test.ts"],
  transformIgnorePatterns,
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};
