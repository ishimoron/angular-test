import { Component } from '@angular/core';
import { PetsInterface } from '../pets-interface';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pets-main',
  templateUrl: './pets-main.component.html',
  styleUrl: './pets-main.component.scss',
})
export class PetsMainComponent {
  petsList: PetsInterface[] = [];

  constructor(private petsService: PetsService) {
    this.petsList = petsService.getAllPets();
  }
}
