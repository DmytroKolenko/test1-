const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/report",
    e2e: {
      watchForFileChanges: true,
      defaultCommandTimeout: 7000,
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
