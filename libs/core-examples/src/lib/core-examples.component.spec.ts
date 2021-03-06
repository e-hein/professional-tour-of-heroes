import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyCoreModule } from '@company/core';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { CoreExamplesComponentHarness } from '@examples/core/testing';
import { CoreExamplesComponent } from './core-examples.component';

describe('company core examples component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ CompanyCoreModule ],
    declarations: [ CoreExamplesComponent ]
  }).compileComponents());

  itShouldCreateComponent(CoreExamplesComponent);

  describe('created', () => {
    let harness: CoreExamplesComponentHarness;
    let component: CoreExamplesComponent;
    let fixture: ComponentFixture<CoreExamplesComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(CoreExamplesComponent);
      component = fixture.componentInstance;
      harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, CoreExamplesComponentHarness);
    });

    it(`should contain text '@examples/core'`, async () => {
      expect(await harness.text()).toContain('@examples/core');
    });

    it('should show example of core component', async () => {
      const coreComponent = await harness.getCoreComponent();
      expect(await coreComponent.isDisplayed()).toBe(true);
    });
  });
});
