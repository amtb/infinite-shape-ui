import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Shape } from '../../models';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShapeComponent implements OnInit {

  @Input()
  shape: Shape;

  constructor() { }

  ngOnInit() {
  }

}
