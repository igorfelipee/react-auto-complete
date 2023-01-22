import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "junit",
  reporterOptions: {
    mochaFile: "coverage/[hash].xml",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    video: false,
    screenshotOnRunFailure: false,
    viewportHeight: 800,
    viewportWidth: 1336,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 1,
    supportFile: "./src/cypress/support/component.ts",
    specPattern: ["**/*.cy.tsx"],
    fileServerFolder: "src",
  },
});
