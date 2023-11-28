import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsMainComponent } from './pets-main/pets-main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PetsMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
