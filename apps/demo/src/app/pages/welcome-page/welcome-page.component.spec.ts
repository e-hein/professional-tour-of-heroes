import { TestBed, ComponentFixture } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { WelcomePageComponent } from './welcome-page.component';
import { DemoAppWelcomePageComponentHarness } from 'apps/demo/testing/demo-app-welcome-page.component-harness';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('demo app welcome page component', () => {
  beforeEach(async () => TestBed.configureTestingModule({
    declarations: [ WelcomePageComponent ]
  }).compileComponents());

  itShouldCreateComponent(WelcomePageComponent);

  describe('started', () => {
    let harness: DemoAppWelcomePageComponentHarness;
    let fixture: ComponentFixture<WelcomePageComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(WelcomePageComponent);
      harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, DemoAppWelcomePageComponentHarness);
    });

    it ('should render title', async () => {
      expect(await harness.getTitleText()).toContain('welcome');
    });
  });
});
