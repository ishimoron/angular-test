import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TableConfig, TableInterface } from '../interfaces/table.interface';
import { TableMappingService } from '../services/table-mapping.service';

@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrl: './table-main.component.scss',
})
export class TableMainComponent implements OnChanges {
  @Input() dataSource: any[];
  @Input() config: TableConfig;
  mappedData: TableInterface;

  @Output() tableChange: any = new EventEmitter();
  editMode = false;

  constructor(private mappingService: TableMappingService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.mappedData = this.mappingService.mapDataToTableFormat(
      this.dataSource,
      this.config
    );
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
