import {Action} from '@ngrx/store';
import {Book} from '../models/book';

export enum BooksActionTypes {
  LoadBooks        = '[Books] load',
  LoadBooksSuccess = '[Books] load success',
  LoadBooksError   = '[Books] load error',
}

export class LoadBooks implements Action {
  public type: string;
  public payload: null;

  constructor() {
    this.type = BooksActionTypes.LoadBooks;
  }
}

export class LoadBooksSuccess implements Action {
  public type: string;
  public payload: Book[];

  constructor(payload: Book[]) {
    this.type = BooksActionTypes.LoadBooksSuccess;
    this.payload = payload;
  }
}

export class LoadBooksError implements Action {
  public type: string;
  public payload: string;

  constructor(payload: string) {
    this.type = BooksActionTypes.LoadBooksError;
    this.payload = payload;
  }
}

export type BookActions = LoadBooks | LoadBooksSuccess | LoadBooksError;
