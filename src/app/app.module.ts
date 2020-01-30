import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestComponent } from "./test/test.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { DemandeEnlevementComponent } from "./demande-enlevement/demande-enlevement.component";
import { MaterialModule } from "./material/material.module";
import { DemandeEnlevementFormComponent } from "./demande-enlevement-form/demande-enlevement-form.component";
import { NgTempusdominusBootstrapModule } from "ngx-tempusdominus-bootstrap";

import {
  DlDateTimeDateModule,
  DlDateTimePickerModule
} from "angular-bootstrap-datetimepicker";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DemandeEnlvFormComponent } from "./demande-enlv-form/demande-enlv-form.component";
import { ColisageFormComponent } from "./colisage-form/colisage-form.component";
import { ListeTiersComponent } from "./liste-tiers/liste-tiers.component";
import { ListeTiersTableComponent } from "./liste-tiers-table/liste-tiers-table.component";
import { AjoutTiersFormComponent } from "./ajout-tiers-form/ajout-tiers-form.component";
import { ListeBonsTableComponent } from "./liste-bons-table/liste-bons-table.component";
import { ListeBonsComponent } from "./liste-bons/liste-bons.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    TestComponent,
    HomepageComponent,
    DemandeEnlevementComponent,
    DemandeEnlevementFormComponent,
    DemandeEnlvFormComponent,
    ColisageFormComponent,
    ListeTiersComponent,
    ListeTiersTableComponent,
    AjoutTiersFormComponent,
    ListeBonsTableComponent,
    ListeBonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgTempusdominusBootstrapModule,
    DlDateTimeDateModule, // <--- Determines the data type of the model
    DlDateTimePickerModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
