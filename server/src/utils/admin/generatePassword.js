// Simple admin script to generate some hash password
// Useful when you would like to create test users
// To run script: `node generatePassword.js`

const bcrypt = require('bcrypt');

// Salt value (seed for hash generator)

const DEFAULT_SALT_VALUE = 10;

// ------------------------------------

const saltRounds = DEFAULT_SALT_VALUE;
const password = 'testuser';

// Generate password hash
bcrypt
  .hash(password, saltRounds)
  .then((hash) => {
    console.log(`Your password hash: ${hash}`);
  })
  .catch((err) => console.error(err.message));
