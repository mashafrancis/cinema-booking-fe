module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  roots: [
    '<rootDir>/src',
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(roots/.*|(\\.|/)(test))\\.(ts|tsx)?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  coverageReporters: [
    'html',
    'json',
    'lcov',
    'text',
    'clover',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/**/*.fixtures.ts',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@components/(.*)$': '<rootDir>src/components/$1',
    '@pages/(.*)$': '<rootDir>src/pages/$1',
  },
  // resolver: '<rootDir>/resolver.js',
  // moduleDirectories: ['utils', 'modules'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/interface.d.ts',
    '!src/**/*interfaces.d.ts',
    '!src/testHelpers.tsx'
  ],
  coverageThreshold: {
    global: {
      'branches': 40,
      'functions': 45,
      'lines': 65,
      'statements': 60,
    },
  },
  setupFiles: [
    '<rootDir>/node_modules/regenerator-runtime/runtime',
    // '<rootDir>/src/setupMocks.ts',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/index.tsx',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react',
    // '<rootDir>/tests/setupTest.js',
  ],
  // testEnvironment: 'node',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
    'node_modules/(?!(@material-ui)/)',
    '/.pnp.js$'
  ],
};
