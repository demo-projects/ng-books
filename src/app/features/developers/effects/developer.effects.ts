import {Injectable} from '@angular/core';
import {Actions, Effect } from '@ngrx/effects';
import {DevelopersActionTypes, CreateDeveloper, AddDeveloper} from '../actions/developers.actions';
import 'rxjs/add/operator/map';

@Injectable()
export class DeveloperEffects {

  constructor(private actions: Actions) {}

  @Effect()
  createDeveloper = this.actions
      .ofType(DevelopersActionTypes.CreateDeveloper)
      .map( (action: CreateDeveloper) => (new AddDeveloper(action.developer, new Date().getMilliseconds(), new Date())))
}