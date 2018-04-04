// keys.js - figure out what credentials to return
// NODE_ENV is in HEROKU
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
