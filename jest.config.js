module.exports = {
  modulePaths: ['<rootDir>/src'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)test.[jt]s?(x)'],
  transform: {
    '^.+\\.[t|j]sx?$': '@swc/jest',
  },
}
