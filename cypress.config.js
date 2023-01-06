const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://my.ayahealthcare.com',
    defaultCommandTimeout: 10000,
    viewportWidth: 1600,
    viewportHeight: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
