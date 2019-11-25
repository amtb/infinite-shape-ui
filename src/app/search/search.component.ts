import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Shape } from '../../models';
import { ShapeApiService } from '../../services';
import { StoreService } from '../../store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnDestroy, OnInit {

  searchForm: FormGroup;

  subscription: Subscription;

  constructor(formBuilder: FormBuilder, private shapeApi: ShapeApiService, private store: StoreService) {
    this.searchForm = formBuilder.group({
      width: [20],
      heigth: [20],
      padding: [4]
    });

    this.subscription = new Subscription();
  }

  ngOnInit() {
  }

  doSearch() {
    if (this.searchForm.valid) {
      const inputs = this.searchForm.value;
      this.subscription.add(
        // call the api
        this.shapeApi.getShape(
          inputs.width,
          inputs.heigth,
          inputs.padding
        ).subscribe(
          // dispatch the fetched data to the store
          (shape: Shape) => this.store.setShape(shape)
        )
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
