import {createSelector} from '@ngrx/store';
import {AppActions, AppActionTypes} from '../actions/app.actions';

// define the structure of the app state
export interface AppState {
  showLoader: boolean,
  showHeader: boolean,
}

// define the initial state
const initState = {
  showLoader: false,
  showHeader: true,
};

// handle the state
export function appReducer(state = initState, action: AppActions) {

  switch (action.type) {

    case AppActionTypes.ToggleLoader:
      return { ...state, showLoader: action.payload };

    case AppActionTypes.ToggleHeader:
      return { ...state, showHeader: action.payload };

    default:
      return state;
  }
}

// create selectors
export const appState = (state) => state.app;

export const selectLoading = createSelector(appState, (state) => state.showLoader);
export const selectHeader  = createSelector(appState, (state) => state.showHeader);
