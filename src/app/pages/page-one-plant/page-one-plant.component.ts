import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-one-plant',
  templateUrl: './page-one-plant.component.html',
  styleUrls: ['./page-one-plant.component.css']
})
export class PageOnePlantComponent implements OnInit {
    // Id de la plante
    plantID!: string;
    // Plante sélectionnée
    plant!: Plant;

  constructor(private activatedRoute: ActivatedRoute, private plantService: PlantService, private router: Router){}

  ngOnInit(): void {
    // Je récupère l'id de la plante dans la route au lancement du composant
    this.activatedRoute.paramMap.pipe(
      switchMap((params : ParamMap) => {
        console.log(params);
        this.plantID = params.get('id')!;
        return this.plantService.getPlantById(Number(this.plantID)).pipe(
          catchError((error) => {
            return throwError(()=> error)
          })
        )
      })
    )
    .subscribe(plant => {
      // Je passe à ma prop plant les datas de la plante sélectionnée pour affichage
      this.plant = plant;
      console.log(plant)
    });
  }  

  // Supprimer une plante de la BDD
  supprimerLaPlante(): void {
 this.plantService.deletePlant(Number(this.plantID)).pipe(
  catchError((error) => {
    return throwError(() => error);
  })
 )
 .subscribe((deletedPlant) => {
   alert(`La plante ${deletedPlant.nom} est supprimée !`);
   this.router.navigate(['/home']);
 }
 )
  }
}

