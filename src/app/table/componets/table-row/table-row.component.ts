import { Component, Input } from '@angular/core';
import { RowItem } from '../../interfaces/table.interface';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
})
export class TableRowComponent {
  @Input() rowItem: RowItem;
}
