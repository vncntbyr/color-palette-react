module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': 'app/$1',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
