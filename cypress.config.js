const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  projectId: "x98u6f",
});

//npx cypress run --record --key aae97afd-d04c-4bb8-bedb-c1e29251dc90