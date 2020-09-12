//@ts-check

/**
 * defines the build order to prevent errors caused by unsatisfied dependencies
 *
 * @type { Array<string> }
 */
const buildOrder = [
  '@company/core',
  '@company/hero',
  'ptoh-web',
  '@examples/core',
  '@examples/hero',
  'demo',
];

module.exports = buildOrder;
