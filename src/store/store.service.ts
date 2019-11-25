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

  constructor() {
    this.state$ = new BehaviorSubject<Shape>([]);
  }

  /** "action" to dispatch a new shapa */
  public setShape(shape: Shape) {
    this.state$.next(shape);
  }

  /** "selects" the shape */
  get shape$(): Observable<Shape> {
    return this.state$.asObservable();
  }
}
