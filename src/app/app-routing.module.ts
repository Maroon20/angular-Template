import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { DemandeEnlevementComponent } from "./demande-enlevement/demande-enlevement.component";
import { ListeTiersComponent } from "./liste-tiers/liste-tiers.component";
import { ListeBonsComponent } from "./liste-bons/liste-bons.component";

const routes: Routes = [
  { path: "test", component: TestComponent },
  { path: "home", component: HomepageComponent },
  { path: "de", component: DemandeEnlevementComponent },
  { path: "ListeTiers", component: ListeTiersComponent },
  { path: "ListeBons", component: ListeBonsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
