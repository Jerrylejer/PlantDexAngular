import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent{
  // Je écupère la plante avec l'input de app-plant-list
  @Input() unePlanteAAfficher!: Plant;

  constructor(private plantService: PlantService, private activatedRoute: ActivatedRoute, private router: Router){}

}
