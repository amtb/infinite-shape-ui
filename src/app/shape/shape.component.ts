import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Pixels, Shape } from '../../models';
import { StoreService } from '../../store';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ShapeComponent {

  shape$: Observable<Shape>;

  icons: string[] =  ['view_stream', 'waves', 'link', 'favorite', 'grade', 'fingerprint'];

  selectedIcon = 'favorite';

  constructor(store: StoreService) {
    this.shape$ = store.shape$;
  }

  /**
   * checks if a pixel is a space
   */
  isBlank(pixel: Pixels): boolean {
    return pixel === Pixels.Spaces;
  }

  draw(pixel: Pixels): string {
    if (pixel === Pixels.Dashes || pixel === Pixels.Pipes) {
      return this.selectedIcon;
    }

    return 'check_box_outline_blank';
  }

  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }
}
