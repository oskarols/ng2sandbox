import {BooksService} from './../services/books.service';
import { Component } from '@angular/core';
import {BookSearchResultListing, BookSearchResultItem} from './../models/book.search';
import {Store} from '@ngrx/store';
import {StoreFormat} from './../store';
import {FavoriteButtonComponent} from './favorite-button.component';

@Component({
    selector: 'books-list',
    template: `
        <h5>Books</h5>
        <ul>
            <li *ngFor="let book of books | async">
                {{book?.volumeInfo?.title}} <favorite-button [book]="book"></favorite-button>
            </li>
        </ul>
    `,
    directives: [FavoriteButtonComponent]
})
export class BooksListComponent {
    books: any;

    constructor(public store: Store<StoreFormat>, public booksService: BooksService) {
        this.books = store.select('books');
    }
}
