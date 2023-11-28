import { Component, Input } from '@angular/core';
import { TableInterface } from '../../interfaces/table.interface';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
})
export class TableViewComponent {
  @Input() dataSource: TableInterface;
}
export interface TableView {
  headers: string[];
  rows: string[];
}
