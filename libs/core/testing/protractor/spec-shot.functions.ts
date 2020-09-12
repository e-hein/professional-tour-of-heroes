import { browser } from 'protractor';

export async function checkScreen(ident: string): Promise<number> {
  if (!browser.imageComparison) {
    console.warn('WARN: no image comparison plugin to check screen: ' + ident);
    return 0;
  }
  return browser.imageComparison.checkScreen(ident);
}
