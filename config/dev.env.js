var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PAGARME_APIKEY: '"ak_test_GCYeHCJterPgIQtn8t4LSW06AtIDBa"',
})
