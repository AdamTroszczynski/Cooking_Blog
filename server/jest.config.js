/** @type {import('ts-jest').JestConfigWithTsJest} */

const dotenv = require('dotenv');

dotenv.config({ override: true, path: '.env.test.local' });

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
