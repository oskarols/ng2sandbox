import { Component } from '@angular/core';
import {BookSearchResultListing, BookSearchResultItem} from './../models/book.search';
import {Store} from '@ngrx/store';
import {StoreFormat} from './../store';

@Component({
    selector: 'books-list',
    template: `
        <h5>Book list</h5>
        <ul>
            <li *ngFor="let book of books">
                {{book.title}}
            </li>
        </ul>
    `
})
export class BooksListComponent {
    books: BookSearchResultItem[]

    constructor(public store: Store<StoreFormat>) {
        store.select('books').subscribe((data: BookSearchResultItem[]) => {
            debugger;
            console.log('args', data);
            this.books = data}
        );
    }
}
