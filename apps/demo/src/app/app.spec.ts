import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { DemoAppComponentHarness, DemoNavigationComponentHarness, DemoNavigationLinkHarness } from '@demo-app/testing';
import { DemoAppComponent } from './app.component';
import { AppModule } from './app.module';
import { demoAppPagesRoutes } from './pages';

describe('demo app', () => {
  let demoApp: DemoAppComponentHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterModule.forRoot(demoAppPagesRoutes),
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(DemoAppComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    await fixture.ngZone.run(() => fixture.debugElement.injector.get(Router).navigateByUrl('/'));

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

    describe('core module', () => {
      let coreLink: DemoNavigationLinkHarness;

      beforeEach(async () => {
        coreLink = await navigation.getNavigationLink({ text: 'core'});
      });

      it('link should be present', async () => {
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

    describe('hero module', () => {
      let heroLink: DemoNavigationLinkHarness;

      beforeEach(async () => {
        heroLink = await navigation.getNavigationLink({ text: 'hero'});
      });

      it('link should be present', async () => {
        expect(await heroLink.isDisplayed()).toBe(true);
      });

      it('should not throw on click', async () => {
        const origError = console.error;
        const errorSpy = jasmine.createSpy('error').and.callThrough();
        console.error = errorSpy;

        try {
          await heroLink.click();
          expect(errorSpy).not.toHaveBeenCalled();
        } finally {
          console.error = origError;
        }
      });
    });
  });
});
