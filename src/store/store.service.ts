import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shape } from '../models';

/**
 * Keeping it simple for now, no ngrx/ngxs boilerplates
 */
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private state$: BehaviorSubject<Shape>;

  private fetching$: BehaviorSubject<boolean>;

  constructor() {
    this.state$ = new BehaviorSubject<Shape>(null);
    this.fetching$ = new BehaviorSubject<boolean>(false);
  }

  /** "action" to dispatch a new shapa */
  public setShape(shape: Shape) {
    this.state$.next(shape);
  }

  public setFetching(fetching: boolean) {
    this.fetching$.next(fetching);
  }

  /** "selects" the shape */
  get shape$(): Observable<Shape> {
    return this.state$.asObservable();
  }

  get loading$(): Observable<boolean> {
    return this.fetching$.asObservable();
  }
}
