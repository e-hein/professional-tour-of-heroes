import { checkScreen, expectThatThereAreNoErrorsEmittedFromTheBrowser, navigateToRootPage, CoreCo } from '@company/core/testing/protractor';
import { HeroCo } from '@company/hero/testing/protractor';
import { AppPage } from '@app/testing/protractor';

describe('professional tour of heroes', () => {
  let appPage: AppPage;

  beforeAll(async () => {
    await navigateToRootPage();
    appPage = new AppPage();
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
    let heroComponent: HeroCo;

    beforeAll(() => {
      heroComponent = appPage.getHeroComponent();
    });

    it('should be displayed', async () => {
      expect(await heroComponent.isDisplayed()).toBe(true);
    });

    it(`should contain text 'WINDSTORM Details'`, async () => {
      expect(await heroComponent.text()).toContain('WINDSTORM Details');
    });
  });

  afterEach(async () => {
    await expectThatThereAreNoErrorsEmittedFromTheBrowser();
  });
});
