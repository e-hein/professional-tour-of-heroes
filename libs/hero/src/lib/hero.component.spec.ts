import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyHeroComponent } from './hero.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('company hero component', () => {
  let component: CompanyHeroComponent;
  let fixture: ComponentFixture<CompanyHeroComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      HeroEditorStubComponent,
      CompanyHeroComponent,
    ]
  }).compileComponents());

  function startComponent(): Promise<void> {
    fixture = TestBed.createComponent(CompanyHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    return fixture.whenStable();
  }

  it('should create without throwing errors', async () => {
    const origConsoleError = console.error;
    const errorSpy = jasmine.createSpy('error').and.callThrough();
    console.error = errorSpy;

    try {
      await startComponent();
    } finally {
      console.error = origConsoleError;
    }

    expect(errorSpy).not.toHaveBeenCalled();
  });

  describe('started', () => {
    beforeEach(() => startComponent());

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
