import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ShapeApiService } from './shape-api.service';

describe('ShapeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ShapeApiService]
  }));

  it('should be created', () => {
    const service: ShapeApiService = TestBed.get(ShapeApiService);
    expect(service).toBeTruthy();
  });
});
