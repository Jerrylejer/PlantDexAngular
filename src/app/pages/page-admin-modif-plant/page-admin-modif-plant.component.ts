import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-admin-modif-plant',
  templateUrl: './page-admin-modif-plant.component.html',
  styleUrls: ['./page-admin-modif-plant.component.css']
})
export class PageAdminModifPlantComponent {
  // Je stocke l'id de la route
  plantID!: string
  // Objet à updater
  plantToUpdate: Plant = {
    id: 0,
    nom: '',
    soleil: '',
    arrosage: 0,
    categorie: '',
    image: ''
  }
  // J'initialise mon formulaire qui va me servir à modifier une plante
  updatePlantForm!: FormGroup;
  // J'injecte mon plantService ainsi que le constructeur de formulaire
  constructor(private plantService: PlantService, 
    private formBuilder: FormBuilder, 
    private route: Router, 
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    // Je récupère l'id contenu dans la route
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
    .subscribe((thisPlant => {
      console.log(thisPlant);
      // Je récupère les datas et pré-rempli mon formulaire
      this.plantToUpdate.id = thisPlant.id;
      this.plantToUpdate.nom = thisPlant.nom;
      this.plantToUpdate.soleil = thisPlant.soleil;
      this.plantToUpdate.arrosage = thisPlant.arrosage;
      this.plantToUpdate.categorie = thisPlant.categorie;
      this.plantToUpdate.image = thisPlant.image;
    }))
      // J'initialise les champs de mon formulaire au lancement de mon composant
      this.updatePlantForm = this.formBuilder.group({
        idToUpdate: [''],
        nomToUpdate: [''],
        soleilToUpdate: [''],
        arrosageToUpdate: [''],
        categorieToUpdate: [''],
        imageToUpdate: ['']
      })
  }

  submit() {
    // Je passe la nouvelle valeur captée par formControlName à la constante que
    // je passe en params de ma requête pour l'update
  const nom = this.updatePlantForm.value.nomToUpdate;
  console.log(this.updatePlantForm.value.nomToUpdate);
  const soleil = this.updatePlantForm.value.soleilToUpdate;
  console.log(this.updatePlantForm.value.soleilToUpdate);
  const arrosage = this.updatePlantForm.value.arrosageToUpdate;
  console.log(this.updatePlantForm.value.arrosageToUpdate);
  const categorie = this.updatePlantForm.value.categorieToUpdate;
  console.log(this.updatePlantForm.value.categorieToUpdate);
  const image = this.updatePlantForm.value.imageToUpdate;
  console.log(this.updatePlantForm.value.imageToUpdate);
      // J'envoie ma requête en utilisant mon service
      this.plantService.updatePlant(Number(this.plantID), nom, soleil, arrosage, categorie, image).pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      )
      .subscribe((response) => {
        alert(`La plante ${this.plantToUpdate.nom} a été modifiée !!! Bravo !`);
        this.route.navigate(['/home']);
        console.log(response);
      })
  }
}
