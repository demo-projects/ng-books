import {Action} from '@ngrx/store';
import {Book} from '../models/book';

export enum BooksActionTypes {
  LoadBooks         = '[Books] Get',
  FetchBooksFromApi = '[Books] Fetch',
  LoadBooksSuccess  = '[Books] Fetch success',
  UpdateBooks       = '[Books] Update books',
  LoadBooksError    = '[Books] Fetch error',
}

export class LoadBooks implements Action {
  public type: string;
  public payload: any;

  constructor() {
    this.type    = BooksActionTypes.LoadBooks;
    this.payload = null;
  }
}

export class FetchBooksFromApi implements Action {
  public type: string;
  public payload: any;

  constructor() {
    this.type = BooksActionTypes.FetchBooksFromApi;
    this.payload = null;
  }
}

export class LoadBooksSuccess implements Action {
  public type: string;
  public payload: any;

  constructor(payload: any) {
    this.type    = BooksActionTypes.LoadBooksSuccess;
    this.payload = payload;
  }
}

export class UpdateBooks implements Action {
  type: string;
  payload: Book[];

  constructor(payload: Book[]) {
    console.log(payload);
    this.type = BooksActionTypes.UpdateBooks;
    this.payload = payload;
  }
}

export class LoadBooksError implements Action {
  public type: string;
  public payload: any;

  constructor(payload: any) {
    this.type    = BooksActionTypes.LoadBooksError;
    this.payload = payload;
  }
}

export type BookActions = LoadBooks | LoadBooksSuccess | LoadBooksError | UpdateBooks;
