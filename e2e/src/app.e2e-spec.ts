import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { AppHarness } from '@app/testing';
import { CoreComponentHarness, SharedSpecContext } from '@company/core/testing';
import { expectThatThereAreNoErrorsEmittedFromTheBrowser, navigateToRootPage, ProtractorSpecContext } from '@company/core/testing/protractor';
import { HeroComponentHarness } from '@company/hero/testing';

describe('professional tour of heroes', () => {
  beforeAll(async () => {
    await navigateToRootPage();
  });

  describe('app acceptance', () => {
    runAcceptanceTests(
      new ProtractorSpecContext(),
      () => ProtractorHarnessEnvironment.loader().getHarness(AppHarness),
    );
  });

  afterEach(async () => {
    await expectThatThereAreNoErrorsEmittedFromTheBrowser();
  });
});

function runAcceptanceTests(context: SharedSpecContext, getApp: () => Promise<AppHarness> ): void {
  let appPage: AppHarness;

  context.before(async () => {
    appPage = await getApp();
  });

  it('should match spec shot', async () => {
    expect(await context.checkScreen('welcome-page')).toBeLessThan(1);
  });

  it('should display welcome message', async () => {
    expect(await appPage.getTitleText()).toEqual('The Professional Tour Of Heroes');
  });

  it('should contain the hero component', async () => {
    expect(await appPage.getHeroComponent()).toBeTruthy();
  });

  describe('hero component', () => {
    let heroComponent: HeroComponentHarness;

    context.before(async () => {
      heroComponent = await appPage.getHeroComponent();
    });

    it('should be displayed', async () => {
      expect(await heroComponent.isDisplayed()).toBe(true);
    });

    it(`should contain text '@company/core'`, async () => {
      expect(await heroComponent.text()).toContain('@company/hero');
    });

    describe('containing core component that', () => {
      let coreComponent: CoreComponentHarness;

      context.before(async () => {
        coreComponent = await heroComponent.getCoreComponent();
      });

      it('should be displayed', async () => {
        expect(await coreComponent.isDisplayed()).toBe(true);
      });

      it(`should contain text '@company/core'`, async () => {
        expect(await coreComponent.text()).toContain('@company/core');
      });
    });
  });
}
