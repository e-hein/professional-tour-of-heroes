import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { expectThatThereAreNoErrorsEmittedFromTheBrowser, navigateToRootPage, ProtractorSpecContext } from '@company/core/testing/protractor';
import { DemoAppComponentHarness, runAcceptanceTests } from '@demo-app/testing';

describe('demo app', () => {
  beforeAll(() => navigateToRootPage());

  describe('acceptance test', () => {
    runAcceptanceTests(
      new ProtractorSpecContext(),
      () => ProtractorHarnessEnvironment.loader().getHarness(DemoAppComponentHarness),
    );
  });

  afterEach(async () => {
    await expectThatThereAreNoErrorsEmittedFromTheBrowser();
  });
});

