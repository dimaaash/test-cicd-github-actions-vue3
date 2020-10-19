module.exports = {
  collectCoverage: true,
  testResultsProcessor: "jest-sonar-reporter",
  coveragePathIgnorePatterns: ["/node_modules/", "/test/"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".+\\.(css|styl|less|sass|scss)$":
      "<rootDir>/node_modules/jest-css-modules-transform"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(eqcare-ui|@ionic-native|vue-instantsearch|instantsearch.js|capacitor-secure-storage-plugin)/)"
  ],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1"
  }
};
