import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { StoreService } from '../../store';

/**
 * Basic http request interceptor that updates the fetching state of the store
 */
@Injectable()
export class OnGoingRequestInterceptor implements HttpInterceptor {
  constructor(private store: StoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.store.setFetching(true);
    return next.handle(req)
      .pipe(
        finalize(() => this.store.setFetching(false))
      );
  }
}
