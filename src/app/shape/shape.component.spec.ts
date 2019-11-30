import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShapeComponent } from './shape.component';
import { importedModules } from './shape.module';

describe('ShapeComponent', () => {
  let component: ShapeComponent;
  let fixture: ComponentFixture<ShapeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [...importedModules],
      declarations: [ ShapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
