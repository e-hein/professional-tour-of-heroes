import { expectThatThereAreNoErrorsEmittedFromTheBrowser, navigateToRootPage, checkScreen } from '@company/core/testing/protractor';
import { AppPage } from './app.po';

describe('demo app', () => {
  let app: AppPage;

  beforeAll(async () => {
    app = new AppPage();
    await navigateToRootPage();
  });

  it('should match spec shot', async () => {
    expect(checkScreen('welcome-page')).toBeLessThan(1);
  });

  it('should display welcome message', () => {
    expect(app.getTitleText()).toEqual('demo app is running!');
  });

  afterEach(async () => {
    await expectThatThereAreNoErrorsEmittedFromTheBrowser();
  });
});
