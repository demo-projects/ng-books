import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './core/containers/app.component';
import {CoreModule} from './core/core.module';

const routes: Routes = [
  {path: 'books', loadChildren: './features/book-browser/book-browser.module#BookBrowserModule'},
  {path: 'devs', loadChildren: './features/developers/developers.module#DevelopersModule'}
];

@NgModule({
  imports: [BrowserModule, CoreModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
