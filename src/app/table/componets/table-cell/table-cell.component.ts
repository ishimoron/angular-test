import { Component, Input } from '@angular/core';
import { CellItem } from '../../interfaces/table.interface';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrl: './table-cell.component.scss',
})
export class TableCellComponent {
  @Input() cellItem: CellItem;
}
