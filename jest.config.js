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
  moduleNameMapper: {
    "^\\.\\./app\\.js$": "<rootDir>/src/app.ts",
    "^\\./routes/(.*)\\.js$": "<rootDir>/src/routes/$1.ts",
    "^\\./(.*\\.routes)\\.js$": "<rootDir>/src/routes/v1/$1.ts",
    "^(?:\\.\\./)+(middleware|controllers|config|services|routes|validators)/(.*)\\.js$":
      "<rootDir>/src/$1/$2.ts",
  },
  transformIgnorePatterns,
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};
