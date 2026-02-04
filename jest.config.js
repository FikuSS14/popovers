/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  
  module.exports = config;