import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { AppHarness, runAcceptanceTests } from '@ptoh-web/testing';
import { expectThatThereAreNoErrorsEmittedFromTheBrowser, navigateToRootPage, ProtractorSpecContext } from '@company/core/testing/protractor';

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

