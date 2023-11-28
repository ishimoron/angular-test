// pets-main.component.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PetsInterface } from '../pets-interface';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pets-main',
  templateUrl: './pets-main.component.html',
  styleUrls: ['./pets-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsMainComponent {
  petsList$: Observable<PetsInterface[]> = this.petsService.getAllPets();

  constructor(private petsService: PetsService) {
    // this.petsList$ = petsService.getAllPets();
  }
}
