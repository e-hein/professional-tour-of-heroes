import { expectThatThereAreNoErrorsEmittedFromTheBrowser, navigateToRootPage, checkScreen } from '@company/core/testing/protractor';
import { DemoAppComponentHarness } from '@demo-app/testing';
import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';

describe('demo app', () => {
  let app: DemoAppComponentHarness;

  beforeAll(async () => {
    await navigateToRootPage();
    app = await ProtractorHarnessEnvironment.loader().getHarness(DemoAppComponentHarness);
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
