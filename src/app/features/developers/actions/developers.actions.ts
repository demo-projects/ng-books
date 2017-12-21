import {Action} from '@ngrx/store';
import {Developer} from '../models/developer';

export enum DevelopersActionTypes {
  CreateDeveloper = '[Developers] Create',
  UpdateDeveloper = '[Developers] Update',
  DeleteDeveloper = '[Developers] Delete',
  AddDeveloper    = '[Developers] Add'
}

export class CreateDeveloper implements Action {
  readonly type = DevelopersActionTypes.CreateDeveloper;

  constructor(public developer: Developer) {
  }
}

export class AddDeveloper implements Action {
  readonly type = DevelopersActionTypes.AddDeveloper;

  public developer: Developer;

  constructor(developer: Developer, id: number, joined: Date) {
      this.developer = { ...developer, id, joined };
  }
}

export class DeleteDeveloper implements Action {
  readonly type = DevelopersActionTypes.DeleteDeveloper;

  constructor(public id: string) {
  }
}

export class UpdateDeveloper implements Action {
  readonly type = DevelopersActionTypes.UpdateDeveloper;

  constructor(public id: string,
              public changes: Partial<Developer>) {
  }
}

export type DevelopersActions = CreateDeveloper | DeleteDeveloper | UpdateDeveloper | AddDeveloper;
