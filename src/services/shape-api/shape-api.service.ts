import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Shape } from '../../models';

interface ShapeReply {
  shape: Shape;
}

@Injectable({
  providedIn: 'root'
})
export class ShapeApiService {

  constructor(private http: HttpClient) { }

  /**
   * Gets a shape from the backend
   */
  getShape(width: number, height: number, padding: number): Observable<Shape> {
    const url = `${environment.backendUrl}/shape?w=${width}&h=${height}&p=${padding}`;
    return this.http.get<ShapeReply>(url).pipe(
      map((shapeReply) => shapeReply.shape)
    );
  }
}
