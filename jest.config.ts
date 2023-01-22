export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/__test__/**/*.spec.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["node_modules", "src/types"],
  reporters: ["default", "jest-junit"],
  globals: {
    "ts-jest": { diagnostics: false, tsconfig: "<rootDir>/tsconfig.json" },
  },
  transform: {},
};
