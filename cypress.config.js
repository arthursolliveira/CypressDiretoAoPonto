const { defineConfig } = require("cypress");

module.exports = defineConfig({

  
  e2e: {
    baseUrl: 'https://devfinance-agilizei.netlify.app/',
    viewportWidth: 1440,
    viewportHeight: 900
  },
});
