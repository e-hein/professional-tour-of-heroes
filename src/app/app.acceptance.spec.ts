import { runAcceptanceTests, AppHarness } from '@app/testing';
import { TestbedSpecContext } from '@company/core/testing/testbed';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

describe('app acceptance', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule],
  }).compileComponents());

  runAcceptanceTests(new TestbedSpecContext(), async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, AppHarness);
    return harness;
  });
});
