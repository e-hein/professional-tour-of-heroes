//@ts-check
exports.launchChrome = function (config) {
  if (!config.plugins.includes('karma-chrome-launcher')) {
    config.plugins.push('karma-chrome-launcher');
  }
  config.browsers = (config.browsers || []).concat(['Chrome']);
};
