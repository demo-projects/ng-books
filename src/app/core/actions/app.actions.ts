import {Action} from '@ngrx/store';

// define action types
export enum AppActionTypes {
  ToggleLoader = '[App] Toggle Loader',
  ToggleHeader = '[App] Toggle Header'
}

// define action constructors
export class ToggleLoader implements Action {
  public type: string;
  public payload: boolean;

  constructor(payload: boolean) {
    this.type    = AppActionTypes.ToggleLoader;
    this.payload = payload;
  }
}

export class ToggleHeader implements Action {
  public payload: boolean;
  public type: string;

  constructor(payload: boolean) {
    this.payload = payload;
    this.type    = AppActionTypes.ToggleHeader;
  }
}

// define App Actions type
export type AppActions = ToggleHeader | ToggleLoader;
