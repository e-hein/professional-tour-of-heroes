import { browser, logging } from 'protractor';

export async function expectThatThereAreNoErrorsEmittedFromTheBrowser(): Promise<void> {
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
}
