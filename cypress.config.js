const { defineConfig } = require('cypress')
// require pact cypress plugin & fs
const pactCypressPlugin = require('@pactflow/pact-cypress-adapter/dist/plugin')
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // pact cypress plugin
      pactCypressPlugin(on, config, fs)
      return (on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
})
