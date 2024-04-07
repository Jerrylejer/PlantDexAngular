import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Appuser } from 'src/app/models/appuser';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css']
})
export class PageConnexionComponent {

  connexionForm!: FormGroup;

  appUser: Appuser = {
    id: 0,
    username: '',
    email: '',
    pwd: ''
  }

  constructor(){}
}
