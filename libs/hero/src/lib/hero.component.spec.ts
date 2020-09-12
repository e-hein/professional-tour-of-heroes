import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CompanyCoreModule } from '@company/core';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
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
    let component: CompanyHeroComponent;
    let fixture: ComponentFixture<CompanyHeroComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(CompanyHeroComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      await fixture.whenStable();
    });

    it('should show the hero editor', () => {
      expect(fixture.debugElement.query(By.directive(HeroEditorStubComponent))).toBeTruthy();
    });
  });
});

@Component({
  selector: 'company-hero-editor',
  template: 'company-hero-editor',
})
class HeroEditorStubComponent {}
