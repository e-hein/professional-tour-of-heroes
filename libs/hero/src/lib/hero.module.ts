import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { CompanyHeroComponent } from './hero.component';

@NgModule({
  declarations: [CompanyHeroComponent, HeroEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CompanyHeroComponent],
})
export class CompanyHeroModule { }
