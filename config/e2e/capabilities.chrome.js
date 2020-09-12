// @ts-check
/**
 * chrome with fix window size
 *
 * @type { {
 *  browserName: string,
 *  chromeOptions: {
 *    args: string[],
 *    mobileEmulation: { deviceMetrics: {
 *      width: number, height: number, pixelRatio: number,
 *    } },
 *  },
 * } }
 */
const defaultChrome = {
  browserName: 'chrome',
  chromeOptions: {
    args: [ "--window-size=1920,1080" ],
    mobileEmulation: {
      deviceMetrics: {
          width: 1920,
          height: 1080,
          pixelRatio: 1.0,
      },
    },
  },
};

exports.capabilityChrome = defaultChrome;
