import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PetsInterface } from './pets-interface';



@Injectable()
export class PetsService {
  private petsMockData = [
    { id: 1, name: 'Барсик', type: 'Кот', age: 3 },
    { id: 2, name: 'Рекс', type: 'Собака', age: 2 },
    { id: 3, name: 'Васька', type: 'Кот', age: 5 },
    { id: 4, name: 'Шарик', type: 'Собака', age: 4 },
    { id: 5, name: 'Мурзик', type: 'Кот', age: 1 },
  ];

  private petsTableData = {
    rows: [
      {
        cells: [
          {
            value: '',
          },
        ],
      },
    ],
  };

  tableConfig = {
    headers: [
      {
        title: 'Pet name',
        key: 'name',
      },
      {
        title: 'Pet age',
        key: 'age',
      },
    ],
  };

  // config = {
  //   headers: [
  //     {
  //       header: string,
  //       key: string,
  //     },
  //   ],
  // };

  getAllPets(): Observable<PetsInterface[]> {
    return of(this.petsMockData);
  }

  constructor() {}
}
