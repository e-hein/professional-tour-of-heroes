import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHarness, runAcceptanceTests } from '@app/testing';
import { TestbedSpecContext } from '@company/core/testing/testbed';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('app acceptance', () => {
  let fixture: ComponentFixture<AppComponent>;
  const context = new TestbedSpecContext(() => fixture);
  let harness: AppHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, AppHarness);
  });

  runAcceptanceTests(context, () => Promise.resolve(harness));
});
