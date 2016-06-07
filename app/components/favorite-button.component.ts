import { Component, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreFormat} from './../store';
import {BooksService} from './../services/books.service';
import {BookSearchResultListing} from './../models/book.search';
import {ADD_BOOKS, ADD_FAVORITE, REMOVE_FAVORITE} from './../reducers/books';
import {Book} from './../models/book';

@Component({
    selector: 'favorite-button',
    template: `
        <span (click)="removeFavorite()" *ngIf="book.isFavorited">&#9733;</span>
        <span (click)="addFavorite()" *ngIf="!book.isFavorited">&#9734;</span>
    `
})
export class FavoriteButtonComponent {
    @Input() book: Book;

    constructor(public store: Store<StoreFormat>, private booksService: BooksService) {
    }

    addFavorite() {
        this.store.dispatch({type: ADD_FAVORITE, payload: this.book});
    }

    removeFavorite() {
        this.store.dispatch({type: REMOVE_FAVORITE, payload: this.book});
    }
}
