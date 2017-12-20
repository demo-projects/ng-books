import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookBrowserComponent} from './containers/book-browser.component';

const routes: Routes = [
  {path: '', component: BookBrowserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookBrowserRoutingModule { }
