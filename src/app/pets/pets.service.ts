import { Injectable } from '@angular/core';
import { PetsInterface } from './pets-interface';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  petsMockData = [
    { id: 1, name: 'Барсик', type: 'Кот', age: 3 },
    { id: 2, name: 'Рекс', type: 'Собака', age: 2 },
    { id: 3, name: 'Васька', type: 'Кот', age: 5 },
    { id: 4, name: 'Шарик', type: 'Собака', age: 4 },
    { id: 5, name: 'Мурзик', type: 'Кот', age: 1 },
  ];

  getAllPets(): PetsInterface[] {
    return this.petsMockData;
  }

  constructor() {}
}
