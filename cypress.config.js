const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "tjh3as",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://multi-step-form.webflow.io",

  },
});
