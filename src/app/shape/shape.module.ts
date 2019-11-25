import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShapeComponent } from './shape.component';



@NgModule({
  declarations: [ShapeComponent],
  exports: [ShapeComponent],
  imports: [
    CommonModule
  ]
})
export class ShapeModule { }
