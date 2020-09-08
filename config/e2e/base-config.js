// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
const path = require('path');

/**
 * @param { import('../project-info').ProjectInfo } projectInfo
 * @param { boolean } usePreBuiltLibraries will replace path aliases to prebuild libraries in dist
 * @returns { import("protractor").Config }
 */
function createProtractorBaseConfig(projectInfo, usePreBuiltLibraries = false) {
  return {
    allScriptsTimeout: 11000,
    specs: [
      path.join(projectInfo.root, 'e2e/src/**/*.e2e-spec.ts'),
    ],
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function() {}
    },
    onPrepare() {
      enablePathAliases(projectInfo, usePreBuiltLibraries);
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: StacktraceOption.PRETTY
        }
      }));
    },
  };
}

/**
 * @param { import('../project-info').ProjectInfo } projectInfo
 * @param {boolean} usePreBuiltLibraries
 */
function enablePathAliases(projectInfo, usePreBuiltLibraries) {
  const tsNode = require('ts-node');
  const tsConfigPaths = require('tsconfig-paths');
  const tsConfigBasePath = path.resolve(__dirname, '../../tsconfig.base.json');
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
}

exports.createProtractorBaseConfig = createProtractorBaseConfig
