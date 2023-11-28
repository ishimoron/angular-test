import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableCellComponent } from './componets/table-cell/table-cell.component';
import { TableRowComponent } from './componets/table-row/table-row.component';
import { TableViewComponent } from './componets/table-view/table-view.component';
import { TableMappingService } from './services/table-mapping.service';
import { TableMainComponent } from './table-main/table-main.component';

@NgModule({
  declarations: [
    TableMainComponent,
    TableViewComponent,
    TableRowComponent,
    TableCellComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [TableMainComponent],
  providers: [TableMappingService],
})
export class TableModule {}
