import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { AppComponent } from './app.component';

describe('demo app component', () => {
  beforeEach(async () => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
    declarations: [
      AppComponent
    ],
  }).compileComponents());

  itShouldCreateComponent(AppComponent);

  describe('created', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;

      fixture.detectChanges();
      await fixture.whenStable();
    });

    it(`should have as title 'demo'`, () => {
      expect(app.title).toEqual('demo');
    });

    it('should render title', () => {
      expect(fixture.nativeElement.querySelector('.content span').textContent).toContain('demo app is running!');
    });
  });
});
