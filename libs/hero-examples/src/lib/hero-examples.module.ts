import { NgModule } from '@angular/core';
import { CompanyHeroModule } from '@company/hero';
import { HeroExamplesComponent } from './hero-examples.component';

@NgModule({
  declarations: [HeroExamplesComponent],
  imports: [
    CompanyHeroModule,
  ],
  exports: [HeroExamplesComponent],
})
export class HeroExamplesModule { }
