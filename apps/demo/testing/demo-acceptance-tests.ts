import { SharedSpecContext, CoreComponentHarness } from '@company/core/testing';
import { HeroComponentHarness } from '@company/hero/testing';
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

  it(`'welcome-page' should match spec shot`, async () => {
    expect(await context.checkScreen('welcome-page')).toBeLessThan(1);
  });

  it(`app title should contain text 'demo'`, async () => {
    expect(await app.getTitleText()).toContain('demo');
  });

  it('should display welcome text', async () => {
    const welcomePage = await context.loader().getHarness(DemoAppWelcomePageComponentHarness);
    expect(await welcomePage.getTitleText()).toContain('welcome');
  });

  describe('demo of core library', () => {
    let coreComponent: CoreComponentHarness;

    context.before(async () => {
      const navigation = await app.getNavigation();
      const coreLink = await navigation.getNavigationLink({ text: 'core'});
      await coreLink.click();
      coreComponent = await context.loader().getHarness(CoreComponentHarness);
    });

    it(`should contain text '@company/core'`, async () => {
      expect(await coreComponent.text()).toContain('@company/core');
    });

    it(`should match spec shot 'core-example'`, async () => {
      expect(await context.checkScreen('core-example')).toBeLessThan(1);
    });
  });

  describe('demo of hero library', () => {
    let heroComponent: HeroComponentHarness;

    context.before(async () => {
      const navigation = await app.getNavigation();
      const heroLink = await navigation.getNavigationLink({ text: 'hero'});
      await heroLink.click();
      heroComponent = await context.loader().getHarness(HeroComponentHarness);
    });

    it(`should contain text '@company/hero'`, async () => {
      expect(await heroComponent.text()).toContain('@company/hero');
    });

    it(`should match spec shot 'hero-example'`, async () => {
      expect(await context.checkScreen('hero-example')).toBeLessThan(1);
    });
  });
}
