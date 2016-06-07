import {BooksService} from './../services/books.service';
import { Component } from '@angular/core';
import {BookSearchResultListing, BookSearchResultItem} from './../models/book.search';
import {Store} from '@ngrx/store';
import {StoreFormat} from './../store';
import 'rxjs/Rx';

@Component({
    selector: 'favorites-list',
    template: `
        <h5>Favorites</h5>
        <ul>
            <li *ngFor="let favorite of favorites | async">
                {{favorite?.volumeInfo?.title}}
            </li>
        </ul>
    `
})
export class FavoritesListComponent {
    favorites: any;

    constructor(public store: Store<StoreFormat>, public booksService: BooksService) {
        this.favorites = store.select('books').map((book:any) => {
            return book.filter((b) => b.isFavorited);
        });
    }
}
