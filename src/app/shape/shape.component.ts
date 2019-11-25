import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pixels, Shape } from '../../models';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ShapeComponent {

  @Input()
  shape: Shape;

  icons: string[] =  ['view_stream', 'waves', 'link', 'favorite', 'grade', 'fingerprint'];

  selectedIcon = 'favorite';

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
