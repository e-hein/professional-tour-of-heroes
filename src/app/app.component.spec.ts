import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyHeroModule } from '@company/hero';
import { AppComponent } from './app.component';

describe('professional-tour-of-heroes app component', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let errorSpy: jasmine.Spy;
  let cleanupTasks: Array<() => Promise<any> | any>;

  beforeEach(async () => {
    cleanupTasks = [];

    const origConsoleError = console.error;
    errorSpy = jasmine.createSpy('error').and.callThrough();
    console.error = errorSpy;
    cleanupTasks.push(() => console.error = origConsoleError);

    await TestBed.configureTestingModule({
      imports: [
        CompanyHeroModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });
  afterEach(() => Promise.all(cleanupTasks));

  it('should create the app', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it(`should have as title 'The Professional Tour Of Heroes'`, () => {
    expect(app.title).toEqual('The Professional Tour Of Heroes');
  });
});
