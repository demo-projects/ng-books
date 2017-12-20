import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';

import { BookBrowserRoutingModule } from './book-browser-routing.module';
import { BookBrowserComponent } from './containers/book-browser.component';
import { BookGalleryComponent } from './components/book-gallery.component';
import {booksReducer} from './reducers/books.reducer';

@NgModule({
  imports: [
    CommonModule,
    BookBrowserRoutingModule,
    StoreModule.forFeature('books', { data: booksReducer } )
  ],
  declarations: [BookBrowserComponent, BookGalleryComponent]
})
export class BookBrowserModule { }
