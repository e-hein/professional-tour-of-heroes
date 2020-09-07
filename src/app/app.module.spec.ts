import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('professional-tour-of-heroes app module', () => {
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
      imports: [AppModule],
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
});
