import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
