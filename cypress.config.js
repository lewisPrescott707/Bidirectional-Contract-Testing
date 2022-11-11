const { defineConfig } = require('cypress')
// require pact cypress plugin & fs

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // pact cypress plugin
      return (on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
})
