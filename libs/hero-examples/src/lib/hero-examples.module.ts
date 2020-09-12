import { NgModule } from '@angular/core';
import { CompanyHeroModule } from '@company/hero';
import { HeroExamplesComponent } from './hero-examples.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroExamplesComponent],
  imports: [
    CompanyHeroModule,
    RouterModule.forChild([
      { path: '', component: HeroExamplesComponent },
    ])
  ],
})
export class HeroExamplesModule { }
