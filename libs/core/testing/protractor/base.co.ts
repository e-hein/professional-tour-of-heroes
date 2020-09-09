import { ComponentHarness } from '@angular/cdk/testing';

export abstract class BaseComponentHarness extends ComponentHarness {
  async isDisplayed(): Promise<boolean> {
    const host = await this.host();
    const dimensions = await host.getDimensions();
    return dimensions.height > 0 && dimensions.width > 0;
  }

  async text(): Promise<string> {
    return await (await this.host()).text();
  }
}
