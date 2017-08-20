var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PAGARME_APIKEY: process.env.PAGARME_APIKEY,
})
