import { BaseComponentHarness } from '@company/core/testing';
import { TestElement } from '@angular/cdk/testing';
import { MatInputHarness } from '@angular/material/input/testing';

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

  getNameInput(): Promise<MatInputHarness> {
    return this.locatorFor(MatInputHarness)();
  }
}
