import { Component, NgZone } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HeroExamplesComponentHarness } from '@company/hero-examples/testing';
import { APP_BASE_HREF } from '@angular/common';

describe('company hero examples routing', () => {
  let loader: HarnessLoader;
  let navigateTo: (path: string) => Promise<boolean>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([
          {
            path: 'hero',
            loadChildren: () => import('@examples/hero').then((hero) => hero.HeroExamplesModule),
          }
        ]),
      ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [StageComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(StageComponent);
    navigateTo = (url) => fixture.componentInstance.navigateTo(url);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should show hero example on hero url', async () => {
    await navigateTo('/hero');
    const heroExample = await loader.getHarness(HeroExamplesComponentHarness);

    expect(await heroExample.isDisplayed()).toBe(true);
  });

});

@Component({ template: 'Stage <router-outlet></router-outlet>'})
class StageComponent {
  constructor(
    private router: Router,
    private zone: NgZone,
  ) {}

  navigateTo(url: string): Promise<boolean> {
    return this.zone.run(() => this.router.navigateByUrl(url));
  }
}
