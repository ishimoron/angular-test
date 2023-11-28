import { Injectable } from '@angular/core';
import { TableConfig, TableInterface } from '../interfaces/table.interface';

@Injectable()
export class TableMappingService {
  mapDataToTableFormat(data: any, config: TableConfig): TableInterface {
    const rows = [];
    data.forEach((dataItem) => {
      const row = {
        cells: [],
      };
      config.headers.forEach((header) => {
        const cell = {
          value: dataItem[header.key],
        };
        row.cells.push(cell);
      });
      rows.push(row);
    });

    return { rows };
  }

  private mapToRow() {}
  constructor() {}
}

// refactor mapDataToTableFormat
// mapToRow
// styling
// tableHeader - component
// мод едит и форму к селам
