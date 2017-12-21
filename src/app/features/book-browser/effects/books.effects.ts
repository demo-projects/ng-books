import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import {BooksActionTypes, LoadBooksSuccess, LoadBooksError} from '../actions/books.actions';
import {Book} from '../models/book';

const API = 'https://www.googleapis.com/books/v1/volumes?q=angular';

@Injectable()
export class BooksEffects {
  private _http: HttpClient;
  private _actions: Actions;

  constructor(http: HttpClient, private actions: Actions) {
    this._http    = http;
    this._actions = actions;
  }

  @Effect()
  books = this.actions
      .ofType(BooksActionTypes.LoadBooks)
      .mergeMap(action => this._http.get<{items}>(API)
          .map(result => (new LoadBooksSuccess(result.items)))
          .catch(error => of(new LoadBooksError(error)))
      )

}