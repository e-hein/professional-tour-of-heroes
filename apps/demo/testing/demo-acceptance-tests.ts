import { SharedSpecContext, CoreComponentHarness } from '@company/core/testing';
import { DemoAppComponentHarness } from './demo-app.component-harness';
import { DemoAppWelcomePageComponentHarness } from './demo-app-welcome-page.component-harness';

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

  it('should app title containing demo', async () => {
    expect(await app.getTitleText()).toContain('demo');
  });

  it('should display welcome text', async () => {
    const welcomePage = await context.loader().getHarness(DemoAppWelcomePageComponentHarness);
    expect(await welcomePage.getTitleText()).toContain('welcome');
  });

  it('should contain demo of core component', async () => {
    const navigation = await app.getNavigation();
    const coreLink = await navigation.getNavigationLink({ text: 'core'});
    await coreLink.click();
    const coreComponent = await context.loader().getHarness(CoreComponentHarness);

    expect(await coreComponent.text()).toContain('@company/core');
  });
}
