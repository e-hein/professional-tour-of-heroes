import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { DemoAppComponentHarness, DemoNavigationComponentHarness, DemoNavigationLinkHarness } from '@demo-app/testing';
import { DemoAppComponent } from './app.component';
import { AppModule } from './app.module';

describe('demo app', () => {
  let demoApp: DemoAppComponentHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(DemoAppComponent);
    demoApp = await TestbedHarnessEnvironment.harnessForFixture(fixture, DemoAppComponentHarness);
  });

  describe('navigation', () => {
    let navigation: DemoNavigationComponentHarness;

    beforeEach(async () => {
      navigation = await demoApp.getNavigation();
    });

    it('should be present', async () => {
      expect(await navigation.isDisplayed()).toBe(true);
    });

    describe('core module link', () => {
      let coreLink: DemoNavigationLinkHarness;

      beforeEach(async () => {
        coreLink = await navigation.getNavigationLink({ text: 'core'});
      });

      it('should be present', async () => {
        expect(await coreLink.isDisplayed()).toBe(true);
      });

      it('should not throw on click', async () => {
        const origError = console.error;
        const errorSpy = jasmine.createSpy('error').and.callThrough();
        console.error = errorSpy;

        try {
          await coreLink.click();
          expect(errorSpy).not.toHaveBeenCalled();
        } finally {
          console.error = origError;
        }
      });
    });
  });
});
