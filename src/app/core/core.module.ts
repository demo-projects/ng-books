import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from './containers/app.component';
import { PageHeaderComponent } from './components/page-header.component';
import { NavigationComponent } from './components/navigation.component';
import { LoaderComponent } from './components/loader.component';
import { NotFoundComponent } from './containers/not-found.component';
import {appReducer} from './reducers/app.reducer';

@NgModule({
  imports     : [
    CommonModule,
    RouterModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [AppComponent, PageHeaderComponent, NavigationComponent, LoaderComponent, NotFoundComponent],
  exports     : [AppComponent, EffectsModule],
})

export class CoreModule {
}
