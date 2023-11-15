import { Component, Input, OnInit } from '@angular/core';
import { PetsInterface } from '../pets-interface';

@Component({
  selector: 'app-pets-view',
  templateUrl: './pets-view.component.html',
  styleUrl: './pets-view.component.scss',
})
export class PetsViewComponent implements OnInit {
  @Input() pets!: PetsInterface;
  ngOnInit() {
    console.log('Pets in PetsViewComponent:', this.pets);
  }
}
