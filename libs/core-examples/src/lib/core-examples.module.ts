import { NgModule } from '@angular/core';
import { CoreExamplesComponent } from './core-examples.component';
import { CompanyCoreModule } from '@company/core';

@NgModule({
  declarations: [CoreExamplesComponent],
  imports: [
    CompanyCoreModule,
  ],
  exports: [CoreExamplesComponent],
})
export class CoreExamplesModule { }
