import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TestbedSpecContext } from '@company/core/testing/testbed';
import { DemoAppComponentHarness, runAcceptanceTests } from '@demo-app/testing';
import { DemoAppComponent } from './app.component';
import { AppModule } from './app.module';

describe('demo app acceptance', () => {
  let fixture: ComponentFixture<DemoAppComponent>;
  const context = new TestbedSpecContext(() => fixture);
  let harness: DemoAppComponentHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoAppComponent);
    await fixture.ngZone.run(() => fixture.debugElement.injector.get(Router).navigateByUrl('/'));

    harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, DemoAppComponentHarness);
  });

  runAcceptanceTests(context, () => Promise.resolve(harness));
});
