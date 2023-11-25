import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './featured/featured.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FeaturedComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [
    FeaturedComponent
  ]
})
export class FeaturedModule { }
