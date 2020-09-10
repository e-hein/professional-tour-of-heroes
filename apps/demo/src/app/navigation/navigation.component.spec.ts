import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Component, NgModule, NgZone } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DescribedRoute } from '@company/core';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { DemoNavigationComponentHarness, DemoNavigationLinkHarness } from '@demo-app/testing';
import { NavigationComponent } from './navigation.component';

describe('demo app navigation component', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      CommonModule,
      RouterTestingModule.withRoutes([
        { title: 'example 1', path: 'stub-1', component: Stub1Component },
        { path: 'stub-2', children: [
          { path: '', component: Stub2Component },
          { path: 'sub-1', children: [
            { path: '', component: Stub1Component },
            { path: 'sub-2', component: Stub2Component },
          ] },
        ] },
        { path: 'lazy', loadChildren: () => Promise.resolve(LazyModule) },
      ] as DescribedRoute[]),
      StubModule,
    ],
    declarations: [
      StageComponent,
      NavigationComponent,
    ],
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
    ]
  }).compileComponents());

  itShouldCreateComponent(NavigationComponent);

  describe('started', () => {
    let harness: DemoNavigationComponentHarness;
    let loader: HarnessLoader;
    let fixture: ComponentFixture<StageComponent>;
    let component: NavigationComponent;

    beforeEach(async () => {
      fixture = TestBed.createComponent(StageComponent);
      fixture.detectChanges();
      await fixture.whenStable();

      const componentElement = fixture.debugElement.query(By.directive(NavigationComponent));
      component = componentElement.componentInstance;

      loader = TestbedHarnessEnvironment.loader(fixture);
      harness = await loader.getHarness(DemoNavigationComponentHarness);
    });

    describe('harness', () => {
      it('should find the component', async () => {
        expect(await harness.isDisplayed()).toBe(true);
      });
    });

    describe('navigation link for stub 1', () => {
      let stub1Link: DemoNavigationLinkHarness;

      beforeEach(async () => {
        stub1Link = await harness.getNavigationLink();
      });

      it('should be present', () => {
        expect(stub1Link).toBeTruthy();
      });

      it(`should be titled 'example 1'`, async () => {
        expect(await stub1Link.text()).toBe('example 1');
      });

      it(`should have target 'stub-1'`, async () => {
        expect(await stub1Link.target()).toBe('stub-1');
      });

      it('after click should show component Stub1', async () => {
        await stub1Link.click();

        expect(fixture.debugElement.query(By.directive(Stub1Component))).toBeTruthy();
      });
    });

    describe('navigation link for stub 2', () => {
      let stub2Link: DemoNavigationLinkHarness;

      beforeEach(async () => {
        stub2Link = await harness.getNavigationLink({ text: /2/ });
      });

      it('should be present', async () => {
        expect(await stub2Link.isDisplayed()).toBe(true);
      });

      it(`should be titled 'stub 2'`, async () => {
        expect(await stub2Link.text()).toBe('stub 2');
      });

      it('should not be active', async () => {
        expect(await stub2Link.isActive()).toBe(false);
      });

      describe('clicked', () => {
        beforeEach(async () => {
          await stub2Link.click();
        });

        it('should be active', async () => {
          expect(await stub2Link.isActive()).toBe(true);
        });

        it('should not show empty route', async () => {
          expect(await harness.hasNavigationLinks({ text: '' })).toBe(false);
        });

        it('should show children', async () => {
          expect(await stub2Link.hasChildren()).toBe(true);
        });

        describe('then sub1', () => {
          let sub1: DemoNavigationLinkHarness;

          beforeEach(async () => {
            sub1 = await harness.getNavigationLink({ text: 'sub 1'});
          });

          it('should be visible', async () => {
            expect(await sub1.isDisplayed()).toBe(true);
          });

          describe('clicked', () => {
            beforeEach(async () => {
              await sub1.click();
            });

            it('stub2 should still be active', async () => {
              expect(await stub2Link.isActive()).toBe(true);
            });

            it('sub1 should be active', async () => {
              expect(await sub1.isActive()).toBe(true);
            });

            it('sub2 should be visible', async () => {
              expect(await sub1.getChild({ text: 'sub 2' })).toBeTruthy();
            });
          });
        });
      });
    });

    describe('navigation link for lazy module', () => {
      let lazyModuleLink: DemoNavigationLinkHarness;

      beforeEach(async () => {
        lazyModuleLink = await harness.getNavigationLink({ text: /lazy/ });
      });

      it('should be present', async () => {
        expect(await lazyModuleLink.isDisplayed()).toBe(true);
      });

      describe('clicked', () => {
        beforeEach(async () => {
          await lazyModuleLink.click();
        });

        it('should show lazy children', async () => {
          expect(await lazyModuleLink.hasChildren()).toBe(true);
        });
      });

    });

    describe('should always show activated route', () => {
      it('for build in modules', async () => {
        await fixture.componentInstance.navigateTo('stub-2/sub-1');

        const sub2Link = await harness.getNavigationLink({ text: 'sub 2' });
        expect(await sub2Link.isDisplayed()).toBe(true);
      });

      it('for lazy modules', async () => {
        await fixture.componentInstance.navigateTo('lazy/lazy-sub-1');

        const lazySub = await harness.getNavigationLink({ text: 'lazy sub 1' });
        expect(await lazySub.isDisplayed()).toBe(true);
      });
    });
  });

});

@Component({ template: '<demo-app-navigation></demo-app-navigation><router-outlet></router-outlet>'})
class StageComponent {
  constructor(
    private router: Router,
    private zone: NgZone,
  ) {}

  navigateTo(url: string): Promise<boolean> {
    return this.zone.run(() => this.router.navigateByUrl(url));
  }
}

@Component({ template: 'stub 1'})
class Stub1Component {}

@Component({ template: 'stub 2'})
class Stub2Component {}

@NgModule({ declarations: [Stub1Component, Stub2Component] })
class StubModule {}

@Component({ template: 'lazy stub'})
class LazyStubComponent {}

@NgModule({
  imports: [
    StubModule,
    RouterModule.forChild([
      { path: '', component: LazyStubComponent },
      { path: 'lazy-sub-1', component: Stub1Component },
      { title: 'lazy example', path: 'lazy-sub-2', component: Stub2Component },
    ] as DescribedRoute[]),
  ],
  declarations: [LazyStubComponent],
})
class LazyModule {}
