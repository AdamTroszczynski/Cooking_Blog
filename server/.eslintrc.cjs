/* eslint-env node */
module.exports = {
  root: true,
  overrides: [
    {
      files: ["tests/**/*"],
      env: {
        jest: true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
