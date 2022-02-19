module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      diagnostics: true,
    },
  },
  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
  moduleNameMapper: {
    "^src/(.*)": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/sample/"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/*.test.(ts|tsx)"],
  testEnvironment: "node",
};
