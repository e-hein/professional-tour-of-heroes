import { TestBed } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('professional-tour-of-heroes app module', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule],
  }).compileComponents());

  itShouldCreateComponent(AppComponent);
});
