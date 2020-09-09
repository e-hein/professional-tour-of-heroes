import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreComponentHarness } from '@company/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { CompanyCoreComponent } from './core.component';

describe('company core component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ CompanyCoreComponent ]
  }).compileComponents());

  itShouldCreateComponent(CompanyCoreComponent);

  describe('created', () => {
    let harness: CoreComponentHarness;
    let component: CompanyCoreComponent;
    let fixture: ComponentFixture<CompanyCoreComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(CompanyCoreComponent);
      component = fixture.componentInstance;
      harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, CoreComponentHarness);
    });

    it(`should contain text '@company/core'`, async () => {
      expect(await harness.text()).toContain('@company/core');
    });
  });
});
