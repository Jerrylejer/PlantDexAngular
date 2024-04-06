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

  // afficherLaPlante(id: number) {
  //     return this.plantService.getPlantById(id).pipe(
  //         catchError((error) => {
  //           return throwError(()=> error)
  //         })
  //       )
  //   .subscribe(plant => {
  //     this.plant = plant;
  //     console.log(plant)
  //   });
  // }

  // afficherLaPlante(id: number): void {
  //   this.activatedRoute.paramMap.pipe(
  //     switchMap((params : ParamMap) => {
  //       console.log(params);
  //       this.plantID = params.get('id')!;
  //       return this.plantService.getPlantById(Number(this.plantID)).pipe(
  //         catchError((error) => {
  //           return throwError(()=> error)
  //         })
  //       )
  //     })
  //   )
  //   .subscribe(plant => {
  //     this.router.navigate(['/home/onePlante/', this.plantID]);
  //     this.plant = plant;
  //     console.log(plant)
  //   });
  // }
}
