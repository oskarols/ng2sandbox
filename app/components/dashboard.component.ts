import {Book} from './../models/book';
import {Component, OnInit} from '@angular/core';
import {BooksToolbarComponent} from './books-toolbar.component';
import {BooksListComponent} from './books-list.component';
import {FavoritesListComponent} from './favorites-list.component';

import {Store} from '@ngrx/store';
import {StoreFormat} from './../store';
import {BooksService} from './../services/books.service';
import {Observable} from 'rxjs/Observable';
import './../utils/rxjs-operators';
import {BookSearchResultListing} from './../models/book.search';

import {ADD_BOOKS, ADD_FAVORITE, REMOVE_FAVORITE} from './../reducers/books';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/components/dashboard.component.html',
    directives: [BooksToolbarComponent, BooksListComponent, FavoritesListComponent]
})
export class DashboardComponent implements OnInit {
    books: Observable<Book>;
    favorites: Observable<Book>;

    constructor(private store: Store<StoreFormat>, private bookService: BooksService) {
        this.books = <Observable<Book>>store.select('books');
        this.favorites = store.select('books').map((book:any) => {
            return book.filter((b) => b.isFavorited);
        });
    }

    ngOnInit() {
    }

    doBookSearch(searchTerm:string) {
        var books = this.bookService.searchForBooks(searchTerm);

        books.subscribe((searchResult: BookSearchResultListing) => {
            this.store.dispatch({type: ADD_BOOKS, payload: searchResult.items });
        });
    }

    addFavorite(book) {
        this.store.dispatch({type: ADD_FAVORITE, payload: book});
    }

    removeFavorite(book) {
        this.store.dispatch({type: REMOVE_FAVORITE, payload: book});
    }
}
