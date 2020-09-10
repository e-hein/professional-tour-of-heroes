import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TestbedSpecContext } from '@company/core/testing/testbed';
import { DemoAppComponentHarness, runAcceptanceTests } from '@demo-app/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('demo app acceptance', () => {
  let fixture: ComponentFixture<AppComponent>;
  const context = new TestbedSpecContext(() => fixture);
  let harness: DemoAppComponentHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, DemoAppComponentHarness);
  });

  runAcceptanceTests(context, () => Promise.resolve(harness));
});
