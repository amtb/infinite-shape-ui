import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { ShapeComponent } from './shape.component';

@NgModule({
  declarations: [ShapeComponent],
  exports: [ShapeComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class ShapeModule { }
