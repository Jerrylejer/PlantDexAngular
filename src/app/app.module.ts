import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { CardComponent } from './components/card/card.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageOnePlantComponent } from './pages/page-one-plant/page-one-plant.component';
import { PageAdminModifPlantComponent } from './pages/page-admin-modif-plant/page-admin-modif-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyPlantsComponent,
    PageAdminComponent,
    PageNotFoundComponent,
    PlantListComponent,
    CardComponent,
    SideBarComponent,
    SearchBarComponent,
    PageOnePlantComponent,
    PageAdminModifPlantComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
