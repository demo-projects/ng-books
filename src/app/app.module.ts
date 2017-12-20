import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/containers/app.component';
import {CoreModule} from './core/core.module';

@NgModule({
  imports: [BrowserModule, CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
