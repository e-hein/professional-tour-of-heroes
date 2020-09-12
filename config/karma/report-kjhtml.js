//@ts-check
function reportKarmaJasmineHtml(config) {
  if (config.reporters && config.reporters.includes('kjhtml')) return;

  config.reporters = (config.reporters || []).concat('kjhtml');
  config.plugins.push(require('karma-jasmine-html-reporter'));
}

exports.reportKarmaJasmineHtml = reportKarmaJasmineHtml;
