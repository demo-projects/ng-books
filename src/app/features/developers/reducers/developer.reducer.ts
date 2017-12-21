import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import {DevelopersActions, DevelopersActionTypes} from '../actions/developers.actions';
import {Developer} from '../models/developer';

// create an adaptor for the developer
const developerAdaptor = createEntityAdapter<Developer>();

// extend the application state to includes our entity
export interface State extends EntityState<Developer> {}

// create an default developer
const developers = {
  ids     : [],
  entities: {}
};

// extract the initial state from the adaptor
export const initState: State = developerAdaptor.getInitialState(developers);

export function developerReducer(state: State = initState, action: DevelopersActions) {

  switch (action.type) {

    case DevelopersActionTypes.AddDeveloper:
      return developerAdaptor.addOne(action.developer, state);

    case DevelopersActionTypes.UpdateDeveloper:
      return developerAdaptor.updateOne({
        id     : action.id,
        changes: action.changes
      }, state);

    case DevelopersActionTypes.DeleteDeveloper:
      return developerAdaptor.removeOne(action.id, state);

    default:
      return state;
  }
}

// selectors
export const getDevelopersState = createFeatureSelector<State>('developer');

export const { selectAll } = developerAdaptor.getSelectors(getDevelopersState);
