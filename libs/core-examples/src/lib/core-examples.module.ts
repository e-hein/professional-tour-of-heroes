import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreExamplesComponent } from './core-examples.component';
import { CompanyCoreModule } from '@company/core';

@NgModule({
  declarations: [CoreExamplesComponent],
  imports: [
    CompanyCoreModule,
    RouterModule.forChild([
      { path: '', component: CoreExamplesComponent },
    ]),
  ],
})
export class CoreExamplesModule { }
