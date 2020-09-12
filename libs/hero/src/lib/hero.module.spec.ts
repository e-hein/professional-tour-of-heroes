import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyHeroComponent, CompanyHeroModule } from '../public-api';

describe('company hero module', () => {
  let component: CompanyHeroComponent;
  let fixture: ComponentFixture<CompanyHeroComponent>;
  let errorSpy: jasmine.Spy;
  let cleanupTasks: Array<() => Promise<any> | any>;

  beforeEach(async () => {
    cleanupTasks = [];

    const origConsoleError = console.error;
    errorSpy = jasmine.createSpy('error').and.callThrough();
    console.error = errorSpy;
    cleanupTasks.push(() => console.error = origConsoleError);

    await TestBed.configureTestingModule({
      imports: [ CompanyHeroModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyHeroComponent);
    component = fixture.componentInstance;
  });

  it('should create', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(errorSpy).not.toHaveBeenCalled();
  });
});
