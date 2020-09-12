import { ComponentFixture, TestBed } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { CompanyCoreComponent } from './core.component';

describe('company core component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ CompanyCoreComponent ]
  }).compileComponents());

  itShouldCreateComponent(CompanyCoreComponent);

  describe('created', () => {
    let component: CompanyCoreComponent;
    let fixture: ComponentFixture<CompanyCoreComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(CompanyCoreComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
      await fixture.whenStable();
    });

    it(`should contain text '@company/core'`, () => {
      expect(fixture.debugElement.nativeElement.textContent).toContain('@company/core');
    });
  });
});
