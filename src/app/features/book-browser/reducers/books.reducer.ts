import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BookActions, BooksActionTypes} from '../actions/books.actions';
import {BooksState} from '../book-browser.module';
import {Book} from '../models/book';

// start with an empty books array
const initState: Book[] = [];

// we only care about document type actions
export function booksReducer(state: Book[] = initState, action: BookActions): Book[] {

  switch (action.type) {

    case BooksActionTypes.UpdateBooks:
      return [...action.payload];

    default:
      return state;
  }
}

// create selector for the items
export const selectFeature = createFeatureSelector<BooksState>('books');
export const selectBooks   = createSelector(selectFeature, (state) => state.items);
