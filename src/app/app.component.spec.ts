import { TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { StoreService } from '../store';
import { StoreServiceMock } from '../store/mocks';
import { AppComponent } from './app.component';
import { SearchModule } from './search';
import { ShapeModule } from './shape';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MockModule(SearchModule),
        MockModule(ShapeModule)
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: StoreService, useClass: StoreServiceMock}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
