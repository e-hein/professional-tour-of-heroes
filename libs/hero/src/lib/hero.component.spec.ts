import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyCoreModule } from '@company/core';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { HeroComponentHarness } from '@company/hero/testing';
import { CompanyHeroComponent } from './hero.component';

describe('company hero component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ CompanyCoreModule ],
    declarations: [ CompanyHeroComponent ]
  }).compileComponents());

  itShouldCreateComponent(CompanyHeroComponent);

  describe('created', () => {
    let harness: HeroComponentHarness;
    let component: CompanyHeroComponent;
    let fixture: ComponentFixture<CompanyHeroComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(CompanyHeroComponent);
      component = fixture.componentInstance;
      harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, HeroComponentHarness);
    });

    it(`should contain text '@company/hero'`, async () => {
      expect(await harness.text()).toContain('@company/hero');
    });

    it('should contain a core component', async () => {
      expect(await harness.getCoreComponent()).toBeTruthy();
    });
  });
});
