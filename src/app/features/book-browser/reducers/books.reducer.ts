import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BookActions, BooksActionTypes} from '../actions/books.actions';
import {Book} from '../models/book';

export interface BooksState {
  data: Book[];
}

const initState: Book[] = [];

export function booksReducer(state: Book[] = initState, action: BookActions): Book[] {

  switch (action.type) {

    case BooksActionTypes.LoadBooksSuccess:
      return [...action.payload as Book[]];

    default:
      return state;
  }
}

export const selectFeature = createFeatureSelector<BooksState>('books');
export const selectBooks   = createSelector(selectFeature, (state) => state.data);
