import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { ShapeComponent } from './shape.component';

export const importedModules = [
  MatIconModule
];

@NgModule({
  declarations: [ShapeComponent],
  exports: [ShapeComponent],
  imports: [
    CommonModule,
    ...importedModules
  ]
})
export class ShapeModule { }
