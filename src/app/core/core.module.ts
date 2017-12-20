import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
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
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [AppComponent, PageHeaderComponent, NavigationComponent, LoaderComponent, NotFoundComponent],
  exports     : [AppComponent],
})

export class CoreModule {
}
