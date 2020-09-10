import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

export const demoAppPagesRoutes = [
  { path: '', component: WelcomePageComponent },
];

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
  ],
})
export class PagesModule { }
