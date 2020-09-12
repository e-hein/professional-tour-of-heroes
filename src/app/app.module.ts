import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompanyHeroModule } from '@company/hero';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CompanyHeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
