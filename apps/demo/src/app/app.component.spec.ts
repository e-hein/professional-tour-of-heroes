import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { AppComponent } from './app.component';
import { DemoAppComponentHarness } from '@demo-app/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

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
    let harness: DemoAppComponentHarness;
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
      harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, DemoAppComponentHarness);
    });

    it(`should have as title 'demo of @company libraries'`, () => {
      expect(app.title).toEqual('demo of @company libraries');
    });

    it('should render title', async () => {
      expect(await harness.getTitleText()).toBe(app.title);
    });
  });
});
