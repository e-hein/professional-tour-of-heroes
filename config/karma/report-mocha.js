//@ts-check
function reportMochaStyle(config) {
  if (config.reporters && config.reporters.includes('mocha')) return;

  config.reporters = (config.reporters || []).concat('mocha');
  config.plugins.push(require('karma-mocha-reporter'));
}

exports.reportMochaStyle = reportMochaStyle;
