import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  // Je écupère la plante avec l'input de app-plant-list
  @Input() unePlanteAAfficher!: Plant;
}
