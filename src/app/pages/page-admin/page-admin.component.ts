import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {
  // J'initialise mon formulaire qui va me servir à ajouter une nouvelle plante
  newPlantForm!: FormGroup;
  // J'injecte mon plantService ainsi que le constructeur de formulaire
  constructor(private plantService: PlantService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    // J'initialise les champs de mon formulaire au lancement de mon composant
      this.newPlantForm = this.formBuilder.group({
        // Je choisi de donner un id donc l'indique dans le formulaire
        id: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
        nom: ['', Validators.required],
        soleil: ['', Validators.required],
        arrosage: ['', Validators.required],
        categorie: ['', Validators.required],
        image: ['', Validators.required]
      })
  }

  submit() {
    // Je vérifie l'intégrité du formulaire
    if(this.newPlantForm.valid) {
      // Je stocke les valeurs récoltées
      const id = this.newPlantForm.value.id;
      console.log(this.newPlantForm.value.id);
      const nom = this.newPlantForm.value.nom;
      console.log(this.newPlantForm.value.nom);
      const soleil = this.newPlantForm.value.soleil;
      console.log(this.newPlantForm.value.soleil);
      const arrosage = this.newPlantForm.value.arrosage;
      console.log(this.newPlantForm.value.arrosage);
      const categorie = this.newPlantForm.value.categorie;
      console.log(this.newPlantForm.value.categorie);
      const image = this.newPlantForm.value.image;
      console.log(this.newPlantForm.value.image);
      // J'envoie ma requête en utiliasant mon service
      this.plantService.createPlant(id, nom, soleil, arrosage, categorie, image).pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      )
      .subscribe((response) => {
        console.log("Nouvelle plante ajoutée !!! Bravo !");
        console.log(response);
      })
    }
  }
}
