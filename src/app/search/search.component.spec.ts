import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ShapeApiService } from '../../services';
import { ShapeApiServiceMock } from '../../services/mocks';
import { StoreService } from '../../store';
import { StoreServiceMock } from '../../store/mocks';
import { SearchComponent } from './search.component';
import { importedModules } from './search.module';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...importedModules, NoopAnimationsModule],
      declarations: [ SearchComponent ],
      providers: [
        {provide: ShapeApiService, useClass: ShapeApiServiceMock },
        {provide: StoreService, useClass: StoreServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
