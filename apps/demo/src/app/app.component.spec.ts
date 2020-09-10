import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { DemoAppComponentHarness, DemoNavigationComponentHarness } from '@demo-app/testing';
import { DemoAppComponent } from './app.component';

describe('demo app component', () => {
  beforeEach(async () => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
    declarations: [
      DemoAppComponent,
      StubbedNavigationComponent,
    ],
  }).compileComponents());

  itShouldCreateComponent(DemoAppComponent);

  describe('created', () => {
    let harness: DemoAppComponentHarness;
    let app: DemoAppComponent;
    let fixture: ComponentFixture<DemoAppComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(DemoAppComponent);
      app = fixture.componentInstance;
      harness = await TestbedHarnessEnvironment.harnessForFixture(fixture, DemoAppComponentHarness);
    });

    it(`should have as title 'demo of @company libraries'`, () => {
      expect(app.title).toEqual('demo of @company libraries');
    });

    it('should render title', async () => {
      expect(await harness.getTitleText()).toBe(app.title);
    });

    describe('navigation', () => {
      let navigation: DemoNavigationComponentHarness;

      beforeEach(async () => {
        navigation = await harness.getNavigation();
      });

      it('should be present', () => {
        expect(navigation).toBeTruthy();
      });
    });
  });
});

@Component({
  selector: 'demo-app-navigation',
  template: 'demo-app-navigation'
})
class StubbedNavigationComponent {}
