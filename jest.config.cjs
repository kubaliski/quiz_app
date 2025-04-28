// Este archivo ayuda a VSCode y otras herramientas a reconocer los tests de Vitest

module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@context/(.*)$': '<rootDir>/src/context/$1',
      '^@services/(.*)$': '<rootDir>/src/services/$1',
      '^@utils/(.*)$': '<rootDir>/src/utils/$1',
      '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@styles/(.*)$': '<rootDir>/src/styles/$1',
      '^@data/(.*)$': '<rootDir>/src/data/$1',
    },
    transform: {},
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  };