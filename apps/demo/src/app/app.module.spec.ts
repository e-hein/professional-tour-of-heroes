import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { DemoAppComponent } from './app.component';
import { AppModule } from './app.module';

describe('demo app module', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule],
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
    ],
  }).compileComponents());

  itShouldCreateComponent(DemoAppComponent);
});
