import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Shape } from '../../models';
import { ShapeApiService } from '../../services';
import { StoreService } from '../../store';
import { CustomValidators } from '../../utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnDestroy, OnInit {

  searchForm: FormGroup;

  subscription: Subscription;

  searching$: Observable<boolean>;

  constructor(formBuilder: FormBuilder, private shapeApi: ShapeApiService, private store: StoreService) {
    const validators = [Validators.required, CustomValidators.even];
    this.searchForm = formBuilder.group({
      width: [20, [...validators, Validators.min(20)]],
      heigth: [20, [...validators, Validators.min(20)]],
      padding: [4, [...validators, Validators.min(4)]]
    });

    this.subscription = new Subscription();
    this.searching$ = store.loading$;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Trigger the api call if the form is valid
   */
  doSearch() {
    if (this.searchForm.valid) {
      const {width, heigth, padding} = this.searchForm.value;
      this.subscription.add(
        // call the api
        this.shapeApi.getShape(width, heigth, padding).subscribe(
          // dispatch the fetched data to the store
          (shape: Shape) => this.store.setShape(shape)
        )
      );
    }
  }

  /**
   * Builds the error message associated to the given controlName in params
   */
  getErrorMessage(controlName: string): string | undefined {
    const control = this.searchForm.get(controlName);
    if (control && control.errors) {
      return control.hasError('required')  ? `A ${controlName} is required`
      : control.hasError('even') ? `Invalid ${controlName} - should be even`
        : control.hasError('min') ? `Invalid ${controlName} - should be >= ${control.errors.min.min}`
          : 'Whut ?';
    }
  }

  get width(): FormControl {
    return this.searchForm.get('width') as FormControl;
  }

  get heigth(): FormControl {
    return this.searchForm.get('heigth') as FormControl;
  }

  get padding(): FormControl {
    return this.searchForm.get('padding') as FormControl;
  }
}
