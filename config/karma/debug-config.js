//@ts-check
const { setBaseOptions } = require('./set-base-options');
const { reportMochaStyle } = require('./report-mocha');
const { launchChrome } = require('./launch-chrome');

exports.useDebugConfig = function (config) {
  setBaseOptions(config);
  reportMochaStyle(config);
  launchChrome(config);
};
