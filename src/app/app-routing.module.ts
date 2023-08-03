import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UiKitComponent } from "./layout/ui-kit/ui-kit.component";
import { HomeComponent } from "./pages/home/home.component";
import { TestComponent } from "./pages/test/test.component";
import { TestResultsComponent } from "./pages/test-results/test-results.component";
import { AccountComponent } from "./pages/account/account.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { PreparationForTheTestComponent } from "./pages/preparation-for-the-test/preparation-for-the-test.component";

const routes: Routes = [
  { path: "ui-kit", component: UiKitComponent },
  { path: "home", component: HomeComponent },
  { path: "home/test", component: TestComponent },
  { path: "home/test-result", component: TestResultsComponent },
  { path: "home/account", component: AccountComponent },
  { path: "home/settings", component: SettingsComponent },
  { path: "home/preperations", component: PreparationForTheTestComponent },
  
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
