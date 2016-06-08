import {BookSearchResultListing, BookSearchResultItem} from './../models/book.search';
import {FavoriteButtonComponent} from './favorite-button.component';
import {Component, Output, Input, EventEmitter} from '@angular/core';
import {Book} from './../models/book';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'books-list',
    template: `
        <h5>Books</h5>
        <ul>
            <li *ngFor="let book of books | async">
                {{book?.volumeInfo?.title}} <favorite-button (add)="add.emit(book)" (remove)="remove.emit(book)" [book]="book"></favorite-button>
            </li>
        </ul>
    `,
    directives: [FavoriteButtonComponent]
})
export class BooksListComponent {
    @Input() books: Observable<Book>;
    @Output() add = new EventEmitter();
    @Output() remove = new EventEmitter();a
}
