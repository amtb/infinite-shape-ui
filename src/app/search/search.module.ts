import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
