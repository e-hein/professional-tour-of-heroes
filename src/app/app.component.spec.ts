import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHarness } from '@app/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { CompanyHeroModule } from '@company/hero';
import { HeroComponentHarness } from '@company/hero/testing';
import { AppComponent } from './app.component';

describe('professional-tour-of-heroes app component', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      CompanyHeroModule,
    ],
    declarations: [
      AppComponent,
    ],
  }).compileComponents());

  itShouldCreateComponent(AppComponent);

  describe('created', () => {
    let harness: AppHarness;
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
      harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, AppHarness);
    });

    it(`should have as title 'The Professional Tour Of Heroes'`, async () => {
      expect(await harness.getTitleText()).toEqual('The Professional Tour Of Heroes');
    });

    describe('hero component', () => {
      let heroComponent: HeroComponentHarness;

      beforeEach(async () => {
        heroComponent = await harness.getHeroComponent();
      });

      it('should be present', async () => {
        expect(await heroComponent.isDisplayed()).toBe(true);
      });
    });
  });
});
