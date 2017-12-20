import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {mockBook, Book} from '../models/book';
import {selectBooks, BooksState} from '../reducers/books.reducer';

@Component({
  selector: 'book-gallery',
  template: `
    <div class="books-wrapper">
      <div class="book" *ngFor="let book of books | async">
         <img src="{{book.volumeInfo.imageLinks.thumbnail}}"/>
        <span><strong>{{ book.volumeInfo.title }}</strong></span>
         <p>{{ book.volumeInfo.subtitle }}</p>
      </div>
    </div>
  `,
  styles  : [`
    .books-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap
    }
    
    .book {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
    }  
  `]
})
export class BookGalleryComponent  {
  public books: Observable<Book[]>;

  constructor(store:Store<BooksState>) {
    this.books = store.select(selectBooks);
  }

}
