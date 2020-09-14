import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompanyHeroModule } from '@company/hero';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CompanyHeroModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
