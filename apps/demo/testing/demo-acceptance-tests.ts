import { SharedSpecContext } from '@company/core/testing';
import { DemoAppComponentHarness } from './demo-app.component-harness';

export function runAcceptanceTests(
  context: SharedSpecContext,
  getApp: () => Promise<DemoAppComponentHarness>,
): void {
  let app: DemoAppComponentHarness;

  context.before(async () => {
    app = await getApp();
  });

  it('should match spec shot', async () => {
    expect(await context.checkScreen('welcome-page')).toBeLessThan(1);
  });

  it('should display welcome message', async () => {
    expect(await app.getTitleText()).toEqual('demo app is running!');
  });
}
