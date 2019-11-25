import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Shape } from '../models';
import { StoreService } from '../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shape$: Observable<Shape>;

  constructor(store: StoreService) {
    this.shape$ = store.shape$;
  }
}
