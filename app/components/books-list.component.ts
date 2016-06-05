import {BooksService} from './../services/books.service';
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
                {{book?.volumeInfo?.title}}
            </li>
        </ul>
    `
})
export class BooksListComponent {
    books: BookSearchResultItem[]

    constructor(public store: Store<StoreFormat>, public booksService: BooksService) {
        // Alternatively get straight from service
        // this.booksService.searchForBooks('cook').subscribe((data) => this.books = data.items);
        
        store.select('books').subscribe((data: BookSearchResultItem[]) => {
            this.books = data
        });
    }
}
