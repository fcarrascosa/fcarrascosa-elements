module.exports = config =>
  config.set({
    autoWatch: false,
    browsers: ['ChromeHeadlessNoSandbox'],
    client: {
      mocha: {
        reporter: 'html',
      },
    },
    colors: true,
    concurrency: Infinity,
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html' },
        { type: 'lcovonly' },
        { type: 'text-summary' },
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          'no-sandbox',
          '--disable-setuid-sandbox',
          '--window-size=2560x1440',
        ],
      },
    },
    esm: {
      coverage: true,
      nodeResolve: true,
    },
    failOnEmptyTestSuite: false,
    files: [
      {
        pattern: config.grep || 'packages/**/test/*.spec.js',
        type: 'module',
      },
    ],
    frameworks: [
      'esm',
      'mocha',
      'chai-dom',
      'sinon-chai',
      'chai',
      'source-map-support',
    ],
    logLevel: config.LOG_INFO,
    mochaReporter: {
      showDiff: true,
    },

    plugins: [
      '@open-wc/karma-esm',
      'karma-mocha',
      'karma-chai',
      'karma-sinon-chai',
      'karma-chai-dom',
      'karma-mocha-reporter',
      'karma-source-map-support',
      'karma-coverage',
      'karma-chrome-launcher',
    ],
    reporters: ['mocha', 'coverage'],
    restartOnFileChange: false,
    singleRun: true,
  });
