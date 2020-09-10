import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TestBed } from '@angular/core/testing';
import { TestbedSpecContext } from '@company/core/testing/testbed';
import { DemoAppComponentHarness, runAcceptanceTests } from '@demo-app/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('demo app acceptance', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule],
  }).compileComponents());

  runAcceptanceTests(new TestbedSpecContext(), async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, DemoAppComponentHarness);
    return harness;
  });
});
