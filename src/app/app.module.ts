import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PetsMainComponent } from './pets/pets-main/pets-main.component';
import { PetsModule } from './pets/pets.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetsMainComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), PetsModule],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
