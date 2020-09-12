import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CompanyHeroModule } from '@company/hero';
import { HeroEditorRemote } from './hero-editor/hero-editor.component.spec';
import { CompanyHeroComponent } from './hero.component';

describe('company hero', () => {
  let fixture: ComponentFixture<StageComponent>;
  let heroComponent: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CompanyHeroModule ],
      declarations: [ StageComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(StageComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    heroComponent = fixture.debugElement.query(By.directive(CompanyHeroComponent));
  });

  describe('hero editor', () => {
    let heroEditor: HeroEditorRemote;

    beforeEach(() => {
      heroEditor = HeroEditorRemote.findIn(fixture);
    });

    it('should be present', () => {
      expect(heroEditor).toBeTruthy();
    });

    it('should update title', async () => {
      const updatedName = 'Earthstomp';
      await heroEditor.getNameInput().setValue(updatedName);

      expect(heroEditor.getTitleText()).toContain(updatedName.toUpperCase());
    });
  });
});

@Component({
  template: '<company-hero></company-hero>'
})
class StageComponent {}
