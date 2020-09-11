import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { HeroExamplesComponentHarness } from '@examples/hero/testing';
import { HeroExamplesComponent } from './hero-examples.component';

describe('company hero examples component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ HeroExamplesComponent ]
  }).compileComponents());

  itShouldCreateComponent(HeroExamplesComponent);

  describe('created', () => {
    let harness: HeroExamplesComponentHarness;
    let component: HeroExamplesComponent;
    let fixture: ComponentFixture<HeroExamplesComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(HeroExamplesComponent);
      component = fixture.componentInstance;
      harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, HeroExamplesComponentHarness);
    });

    it(`should contain text '@examples/hero'`, async () => {
      expect(await harness.text()).toContain('@examples/hero');
    });
  });
});
