import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PetsInterface } from '../pets-interface';

@Component({
  selector: 'app-pets-view',
  templateUrl: './pets-view.component.html',
  styleUrls: ['./pets-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsViewComponent {
  @Input() pets: PetsInterface[];
  displayedColumns: string[] = ['id', 'name', 'type', 'age'];
  tableConfig = {
    headers: [
      {
        title: 'Pet name',
        key: 'name',
      },
      {
        title: 'Pet age',
        key: 'age',
      },
      {
        title: 'Types',
        key: 'type',
      },
    ],
  };
}
