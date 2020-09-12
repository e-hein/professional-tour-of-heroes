import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DemoAppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { demoAppPagesRoutes, PagesModule } from './pages';

export const demoAppRoutes: Routes = [
  {
    path: '',
    children: demoAppPagesRoutes,
  },
  {
    path: 'core',
    loadChildren: () => import('@examples/core').then((coreExamples) => coreExamples.CoreExamplesModule),
  }
];

@NgModule({
  declarations: [
    DemoAppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    RouterModule.forRoot(demoAppRoutes),
  ],
  providers: [],
  bootstrap: [DemoAppComponent]
})
export class AppModule { }
