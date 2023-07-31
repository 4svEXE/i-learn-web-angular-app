import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiKitComponent } from './layout/ui-kit/ui-kit.component';

const routes: Routes = [
  {path: 'ui-kit', component: UiKitComponent },
  {path: 'home', component: UiKitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
