//@ts-check

/**
 * defines the build order to prevent errors caused by unsatisfied dependencies
 *
 * @type { Array<string> }
 */
const buildOrder = [
  '@company/core',
  '@company/hero',
  'professional-tour-of-heroes',
  '@examples/core',
  'demo',
];

module.exports = buildOrder;
