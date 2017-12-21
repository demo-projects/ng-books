import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevelopersComponent} from './containers/developers.component';

const routes: Routes = [
  {path:'', component: DevelopersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopersRoutingModule { }
