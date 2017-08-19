var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PAGARME_API_KEY:process.env.PAGARME_API_KEY
})
