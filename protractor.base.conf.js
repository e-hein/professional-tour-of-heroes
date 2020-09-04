"use strict";
// @ts-check

// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
const path = require('path');

/**
 *
 * @param { import('./config/project-info').ProjectInfo } projectInfo
 * @param { boolean } usePreBuiltLibraries will replace path aliases to prebuild libraries in dist
 * @returns { import("protractor").Config }
 */
function createProtractorConfig(projectInfo, usePreBuiltLibraries = false) {
  return {
    allScriptsTimeout: 11000,
    specs: [
      './src/**/*.e2e-spec.ts'
    ],
    capabilities: {
      browserName: 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function() {}
    },
    onPrepare() {
      const tsNode = require('ts-node');
      const tsConfigPaths = require('tsconfig-paths');
      const tsConfigBasePath = require.resolve('./tsconfig.base.json');
      const pathsOptions = {
        baseUrl: path.dirname(tsConfigBasePath),
        paths: usePreBuiltLibraries
          ? { '@company/*': ['dist/company/*'] }
          : require(tsConfigBasePath).compilerOptions.paths
        ,
      };
      // console.log(JSON.stringify({ pathsOptions }, null, 2));
      tsConfigPaths.register(pathsOptions);
      tsNode.register({
        project: path.join(projectInfo.root, 'e2e/tsconfig.json'),
      });
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: StacktraceOption.PRETTY
        }
      }));
    }
  }
}

module.exports = createProtractorConfig;
