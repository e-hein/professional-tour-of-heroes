import { TestBed } from '@angular/core/testing';
import { CompanyHeroModule } from '@company/hero';
import { CompanyHeroComponent } from './hero.component';

describe('company hero module', () => {
  let errorSpy: jasmine.Spy;
  let cleanUpTasks: Array<() => {}>;

  beforeEach(async () => {
    cleanUpTasks = [];

    errorSpy = jasmine.createSpy('error');
    const origConsoleError = console.error;
    console.error = errorSpy;
    cleanUpTasks.push(() => console.error = origConsoleError);

    await TestBed.configureTestingModule({
      imports: [ CompanyHeroModule ],
    }).compileComponents();
  });
  afterEach(() => Promise.all(cleanUpTasks));

  it('should start CompanyHeroComponent without errors', async () => {
    const fixutre = TestBed.createComponent(CompanyHeroComponent);
    fixutre.detectChanges();
    await fixutre.whenStable();
    expect(errorSpy).not.toHaveBeenCalled();
  });
});
