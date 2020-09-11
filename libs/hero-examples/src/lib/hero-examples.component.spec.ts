import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyHeroModule } from '@company/hero';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { HeroExamplesComponentHarness } from '@examples/hero/testing';
import { HeroExamplesComponent } from './hero-examples.component';

describe('company hero examples component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ CompanyHeroModule ],
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

    it('should show example of hero component', async () => {
      const heroComponent = await harness.getHeroComponent();
      expect(await heroComponent.isDisplayed()).toBe(true);
    });
  });
});
