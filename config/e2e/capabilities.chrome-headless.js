//@ts-check
const capabilityChromeHeadless = JSON.parse(JSON.stringify(require('./capabilities.chrome').capabilityChrome));
capabilityChromeHeadless.chromeOptions.args.push(
  '--headless', '--disable-gpu', '--font-render-hinting=none'
);

module.exports.capabilityChromeHeadless = capabilityChromeHeadless;
