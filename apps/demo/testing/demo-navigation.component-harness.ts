import { BaseHarnessFilters, HarnessPredicate } from '@angular/cdk/testing';
import { BaseComponentHarness } from '@company/core/testing';

export interface DemoNavigationLinkHarnessFilters extends BaseHarnessFilters {
  text?: string | RegExp;
}

export class DemoNavigationLinkHarness extends BaseComponentHarness {
  static hostSelector = 'li';
  private a = this.locatorFor('a');

  static with(filters: DemoNavigationLinkHarnessFilters): HarnessPredicate<DemoNavigationLinkHarness> {
    return new HarnessPredicate(DemoNavigationLinkHarness, filters)
      .addOption('text', filters.text, (harness, text) => HarnessPredicate.stringMatches(harness.text(), text))
    ;
  }

  async target(): Promise<string> {
    const a = await this.a();
    const target = await a.getProperty('title');
    return '' + target;
  }

  async click(): Promise<void> {
    const a = await this.a();
    await a.click();
    await this.forceStabilize();
  }

  async isActive(): Promise<boolean> {
    const a = await this.a();
    const isActive = await a.hasClass('is-active');
    return isActive;
  }

  async getChild(filters: Omit<DemoNavigationLinkHarnessFilters, 'ancestor'> = {}): Promise<DemoNavigationLinkHarness> {
    return await this.locatorFor(DemoNavigationLinkHarness.with(filters))();
  }

  async hasChildren(filters: Omit<DemoNavigationLinkHarnessFilters, 'ancestor'> = {}): Promise<boolean> {
    return this.getChild(filters).then(() => true, () => false);
  }
}

export class DemoNavigationComponentHarness extends BaseComponentHarness {
  static hostSelector = 'demo-app-navigation';

  async getNavigationLink(filters: Omit<DemoNavigationLinkHarnessFilters, 'ancestor'> = {}): Promise<DemoNavigationLinkHarness> {
    return await this.locatorFor(DemoNavigationLinkHarness.with(filters))();
  }

  async hasNavigationLinks(filters: Omit<DemoNavigationLinkHarnessFilters, 'ancestor'> = {}): Promise<boolean> {
    return this.getNavigationLink(filters).then(() => true, () => false);
  }
}
