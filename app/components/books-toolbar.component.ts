import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreFormat} from './../store';
import {BooksService} from './../services/books.service';
import {BookSearchResultListing} from './../models/book.search';
import {ADD_BOOKS} from './../reducers/books';

@Component({
    selector: 'books-toolbar',
    template: `
        <input [(ngModel)]="searchTerm" type="text" placeholder="search book titles" />
        <button (click)="loadBooks()">Add Books</button>
        <p *ngIf="searchTerm">Using search term: {{searchTerm}}</p>
    `
})
export class BooksToolbarComponent {
    searchTerm: string = undefined;
    totalResults: number;

    constructor(public store: Store<StoreFormat>, private booksService: BooksService) {

    }

    loadBooks() {
        var books = this.booksService.searchForBooks(this.searchTerm);

        books.subscribe((searchResult: BookSearchResultListing) => {
            this.store.dispatch({type: ADD_BOOKS, payload: searchResult.items });
        });

        console.log(this.searchTerm);
    }
}
