import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule, ActionReducerMap} from '@ngrx/store';

import { BookBrowserRoutingModule } from './book-browser-routing.module';
import { BookBrowserComponent } from './containers/book-browser.component';
import { BookGalleryComponent } from './components/book-gallery.component';
import {BooksEffects} from './effects/books.effects';
import {Book} from './models/book';
import {booksReducer} from './reducers/books.reducer';

// books feature state
export interface BooksState {
  data: Book[];
};

// reducer composition
const reducers: ActionReducerMap<BooksState> = {
  data: booksReducer
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BookBrowserRoutingModule,
    StoreModule.forFeature('books', reducers),
    EffectsModule.forFeature([BooksEffects])
  ],
  declarations: [BookBrowserComponent, BookGalleryComponent]
})
export class BookBrowserModule { }
