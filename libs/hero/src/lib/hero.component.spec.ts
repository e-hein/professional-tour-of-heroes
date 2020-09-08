import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CompanyCoreComponent, CompanyCoreModule } from '@company/core';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { CompanyHeroComponent } from './hero.component';

describe('company hero component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ CompanyCoreModule ],
    declarations: [ CompanyHeroComponent ]
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

    it(`should contain text '@company/hero'`, () => {
      expect(fixture.debugElement.nativeElement.textContent).toContain('@company/hero');
    });

    it('should contain a core component', () => {
      expect(fixture.debugElement.query(By.directive(CompanyCoreComponent))).toBeTruthy();
    });
  });
});
