import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      width: [''],
      heigth: [''],
      padding: ['']
    });
  }

  ngOnInit() {
  }

  doSearch() {
    console.log(this.searchForm.value);
  }

}
