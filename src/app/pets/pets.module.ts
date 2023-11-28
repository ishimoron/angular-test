import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from '../table/table.module';
import { PetsMainComponent } from './pets-main/pets-main.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsViewComponent } from './pets-view/pets-view.component';
import { PetsService } from './pets.service';

@NgModule({
  declarations: [PetsMainComponent, PetsViewComponent],
  imports: [CommonModule, TableModule, PetsRoutingModule],
  // exports: [PetsMainComponent],
  providers: [PetsService],
})
export class PetsModule {}
