import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoadBooks} from '../actions/books.actions';
import {BooksState} from '../book-browser.module';

@Component({
  selector: 'book-browser',
  template: `
    <book-gallery></book-gallery>
  `
})
export class BookBrowserComponent {

  constructor(store: Store<BooksState>) {
    store.dispatch(new LoadBooks())
  }
}
