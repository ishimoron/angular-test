import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PetsMainComponent } from './pets-main/pets-main.component';
import { PetsViewComponent } from './pets-view/pets-view.component';

@NgModule({
  declarations: [PetsMainComponent, PetsViewComponent],
  imports: [CommonModule, NgbModule],
  exports: [PetsMainComponent, PetsViewComponent],
})
export class PetsModule {}
