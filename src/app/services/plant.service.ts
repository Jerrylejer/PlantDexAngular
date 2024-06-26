import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable, catchError, throwError } from 'rxjs';
import { Environnement } from 'src/environnement';

@Injectable({
  providedIn: 'root',
})
export class PlantService {

  // url de base pour l'accès à l'API
  private readonly apiUrl = Environnement.plantdexApiUrl; 

  constructor(private http: HttpClient) {}

  /**
   * La méthode getPlants retourne
   * une requête http de type GET (on veut récupérer des données)
   * dont les données seront de type Plant[] (tableau d'objets de type Plant)
   * à partir de l'URL apiUrl/plants/"
   *
   */
  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${this.apiUrl}/plants`).pipe(
      catchError((error) => {
        return throwError(() => error)
      })
    );
  }

    /**
   * La méthode getPlantById retourne
   * une requête http de type GET (on veut récupérer une donnée)
   * dont les données seront de type Plant (1 json d'une plante)
   * à partir de l'URL apiUrl/plants/id/:id"
   *
   */
    getPlantById(id: number): Observable<Plant> {
      return this.http.get<Plant>(`${this.apiUrl}/plants/id/${id}`).pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      );
    }

    /**
   * La méthode deletePlantById retourne
   * une requête http de type DELETE 
   * à partir de l'URL apiUrl/plants/delete/:id"
   */
    deletePlant(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/plants/delete/${id}`).pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      );
    }

    /**
   * La méthode updatePlantById retourne
   * une requête http de type PUT 
   * à partir de l'URL apiUrl/plants/update/:id"
   */
    updatePlant(id: number, nom: string, soleil: string, arrosage: number, categorie: string, image: string): Observable<Plant> {
      const body = {
        id: id,
        nom: nom,
        soleil: soleil,
        arrosage: arrosage,
        categorie: categorie,
        image: image
      }
      console.log(id);
      console.log(body);
      return this.http.put<Plant>(`${this.apiUrl}/plants/update/${id}`, body).pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      );
    }

    // updatePlant(id: number, formData: FormData): Observable<any> {
    //   console.log(id);
    //   console.log(formData.get('nom'));
    //   return this.http.put(`${this.apiUrl}/plants/update/${id}`, formData).pipe(
    //     catchError((error) => {
    //       return throwError(() => error)
    //     })
    //   );
    // }

    /**
   * La méthode createPlant retourne
   * une requête http de type POST 
   * à partir de l'URL apiUrl/plants/post"
   */
    createPlant(id: number, nom: string, soleil: string, arrosage: number, categorie: string, image: string): Observable<Plant> {
      const body = {
        id: id,
        nom: nom,
        soleil: soleil,
        arrosage: arrosage,
        categorie: categorie,
        image: image
      }
      return this.http.post<Plant>(`${this.apiUrl}/plants/post`, body).pipe(
        catchError((error) => {
          return throwError(() => error)
        })
      );
    }
}
