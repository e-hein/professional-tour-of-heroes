//@ts-check
exports.launchChromeHeadless = function (config) {
  if (!config.plugins.includes('karma-chrome-launcher')) {
    config.plugins.push('karma-chrome-launcher');
  }
  config.browsers = (config.browsers || []).concat(['ChromeHeadless']);
};
