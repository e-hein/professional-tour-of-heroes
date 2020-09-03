import { expectThatThereAreNoErrorsEmittedFromTheBrowser, checkScreen, navigateToRootPage } from '@company/core/testing/protractor';
import { AppPage } from './app.po';

describe('professional tour of heroes', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await navigateToRootPage();
    expect(page.getTitleText()).toEqual('The Professional Tour Of Heroes');
    expect(await checkScreen('welcome-page')).toBeLessThan(1);
  });

  afterEach(async () => {
    await expectThatThereAreNoErrorsEmittedFromTheBrowser();
  });
});
