import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import {DeveloperFormComponent} from './components/developer-form.component';
import {DeveloperTableComponent} from './components/developer-table.component';
import {DevelopersComponent} from './containers/developers.component';

import {DevelopersRoutingModule} from './developers-routing.module';
import {DeveloperEffects} from './effects/developer.effects';
import {Developer} from './models/developer';
import {developerReducer} from './reducers/developer.reducer';

@NgModule({
  imports     : [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('developer', developerReducer),
    EffectsModule.forFeature([DeveloperEffects]),
    DevelopersRoutingModule
  ],
  declarations: [DevelopersComponent, DeveloperFormComponent, DeveloperTableComponent]
})
export class DevelopersModule {
}
