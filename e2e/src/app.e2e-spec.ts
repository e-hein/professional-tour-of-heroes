import { expectThatThereAreNoErrorsEmittedFromTheBrowser, checkScreen, navigateToRootPage } from '@company/core/testing/protractor';
import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { AppHarness } from '@app/testing';
import { HeroComponentHarness } from '@company/hero/testing';
import { CoreComponentHarness } from '@company/core/testing';

describe('professional tour of heroes', () => {
  let appPage: AppHarness;

  beforeAll(async () => {
    await navigateToRootPage();
    appPage = await ProtractorHarnessEnvironment.loader().getHarness(AppHarness);
  });

  it('should match spec shot', async () => {
    expect(await checkScreen('welcome-page')).toBeLessThan(1);
  });

  it('should display welcome message', async () => {
    expect(await appPage.getTitleText()).toEqual('The Professional Tour Of Heroes');
  });

  it('should contain the hero component', async () => {
    expect(await appPage.getHeroComponent()).toBeTruthy();
  });

  describe('hero component', () => {
    let heroComponent: HeroComponentHarness;

    beforeAll(async () => {
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

      beforeAll(async () => {
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

  afterEach(async () => {
    await expectThatThereAreNoErrorsEmittedFromTheBrowser();
  });
});
