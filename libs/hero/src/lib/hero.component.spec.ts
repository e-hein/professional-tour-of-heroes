import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyCoreModule } from '@company/core';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { HeroComponentHarness } from '@company/hero/testing';
import { CompanyHeroComponent } from './hero.component';

describe('company hero component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ CompanyCoreModule ],
    declarations: [
      HeroEditorStubComponent,
      CompanyHeroComponent,
    ],
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

    xit('should show the hero editor', async () => {
      expect(await harness.getHeroEditor()).toBeTruthy();
    });
  });
});

@Component({
  selector: 'company-hero-editor',
  template: 'company-hero-editor',
})
class HeroEditorStubComponent {}
