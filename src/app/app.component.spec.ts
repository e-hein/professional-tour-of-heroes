import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { CompanyHeroComponent, CompanyHeroModule } from '@company/hero';
import { AppComponent } from './app.component';

describe('professional-tour-of-heroes app component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      CompanyHeroModule,
    ],
    declarations: [
      AppComponent,
    ],
  }).compileComponents());

  itShouldCreateComponent(AppComponent);

  describe('created', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
    });

    it(`should have as title 'The Professional Tour Of Heroes'`, () => {
      expect(app.title).toEqual('The Professional Tour Of Heroes');
    });

    describe('hero component', () => {
      let heroComponent: DebugElement;

      beforeEach(() => {
        heroComponent = fixture.debugElement.query(By.directive(CompanyHeroComponent));
      });

      it('should be present', () => {
        expect(heroComponent).toBeTruthy();
      });
    });
  });
});
