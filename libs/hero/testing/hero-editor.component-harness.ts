import { BaseComponentHarness } from '@company/core/testing';
import { TestElement } from '@angular/cdk/testing';

export class HeroEditorComponentHarness extends BaseComponentHarness {
  static hostSelector = 'company-hero-editor';

  getTitle(): Promise<TestElement> {
    return this.locatorFor('h2')();
  }

  async getTitleText(): Promise<string> {
    return (await this.getTitle()).text();
  }

  async getHeroId(): Promise<number | null> {
    const heroIdElement = await this.locatorFor('.hero-id')();
    const heroIdText = (await heroIdElement.text()).trim();
    const heroId = parseInt(heroIdText, 10);
    return isNaN(heroId) ? null : heroId;
  }

  getNameInput(): Promise<HeroEditorNameInputHarness> {
    return this.locatorFor(HeroEditorNameInputHarness)();
  }
}

export class HeroEditorNameInputHarness extends BaseComponentHarness {
  static hostSelector = 'input[placeholder=name]';

  getInput(): Promise<TestElement> {
    return this.host();
  }

  async getValue(): Promise<string | null> {
    const value = await (await this.getInput()).getProperty('value');
    return typeof value === 'string' ? value : null;
  }

  async setValue(value: string | null): Promise<void> {
    const input = await this.getInput();
    await input.clear();
    if (value !== null) {
      await input.sendKeys(value);
    }
  }
}
