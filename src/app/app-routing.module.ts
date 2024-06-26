import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageOnePlantComponent } from './pages/page-one-plant/page-one-plant.component';
import { PageAdminModifPlantComponent } from './pages/page-admin-modif-plant/page-admin-modif-plant.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // si un user arrive sur localhost:4200 on le redirige vers localhost:4200/home
  { path: 'home', component: PageHomeComponent },
  { path: 'home/onePlant/:id', component: PageOnePlantComponent },
  { path: 'my-plants', component: PageMyPlantsComponent },
  { path: 'connexion', component: PageConnexionComponent },
  { path: 'admin', component: PageAdminComponent },
  { path: 'admin/modifPlant/:id', component: PageAdminModifPlantComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
