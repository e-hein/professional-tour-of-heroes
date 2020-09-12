import { TestBed } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { PagesModule } from './pages.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

describe('demo app pages module', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [PagesModule],
  }).compileComponents());

  itShouldCreateComponent(WelcomePageComponent);
});
