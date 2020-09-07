import { NgModule } from '@angular/core';
import { CompanyCoreModule } from '@company/core';
import { CompanyHeroComponent } from './hero.component';

@NgModule({
  declarations: [CompanyHeroComponent],
  imports: [
    CompanyCoreModule,
  ],
  exports: [CompanyHeroComponent]
})
export class CompanyHeroModule { }
