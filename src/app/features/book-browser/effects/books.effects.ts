import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Action} from '@ngrx/store';
import {of} from 'rxjs/observable/of';
import {ToggleLoader} from '../../../core/actions/app.actions';
import {BooksActionTypes, LoadBooksSuccess, LoadBooksError, FetchBooksFromApi, UpdateBooks, BookActions} from '../actions/books.actions';

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
  getBooks = this.actions
      .ofType(BooksActionTypes.LoadBooks)
      .flatMap(() => [
        new ToggleLoader(true),
        new FetchBooksFromApi()
      ]);

  @Effect()
  fetchBooks = this.actions
      .ofType(BooksActionTypes.FetchBooksFromApi)
      .mergeMap(() => this._http.get<{ items }>(API)
          .map(result => (new LoadBooksSuccess(result)))
          .catch(error => of(new LoadBooksError(error)))
      );

  @Effect()
  updateBooks = this.actions
      .ofType(BooksActionTypes.LoadBooksSuccess)
      .flatMap( (action: BookActions) => [
          new UpdateBooks(action.payload.items),
          new ToggleLoader(false),
      ]);

  @Effect()
  hideLoader = this.actions
      .ofType(BooksActionTypes.LoadBooksError)
      .flatMap((action) => [
        new ToggleLoader(false),
        new LoadBooksError(action)
      ])
}
