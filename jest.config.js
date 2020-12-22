module.exports = {
  coverageReporters: ['text', 'cobertura', 'lcov'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleDirectories: ['./node_modules', './'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '~src/(.*)': '<rootDir>/src/$1',
    '~tests/(.*)': '<rootDir>/tests/$1',
  },
  reporters: ['default', 'jest-junit'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: ['<rootDir>/**/__tests__/*.{ts,tsx,js}', '<rootDir>/tests/**/*.test.{ts,tsx,js}'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
}

