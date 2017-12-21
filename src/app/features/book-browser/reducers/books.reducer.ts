import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BookActions, BooksActionTypes} from '../actions/books.actions';
import {BooksState} from '../book-browser.module';
import {Book} from '../models/book';

const initState: Book[] = [];

export function booksReducer(state: Book[] = initState, action: BookActions): Book[] {

  switch (action.type) {

    case BooksActionTypes.LoadBooksSuccess:
      return [...action.payload];

    default:
      return state;
  }
}

export const selectFeature = createFeatureSelector<BooksState>('books');
export const selectBooks   = createSelector(selectFeature, (state) => state.data);
