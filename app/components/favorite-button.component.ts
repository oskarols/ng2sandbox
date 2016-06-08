import {Component, Input, Output, EventEmitter} from '@angular/core';
import {BookSearchResultListing} from './../models/book.search';
import {Book} from './../models/book';

@Component({
    selector: 'favorite-button',
    template: `
        <span (click)="add.emit(book)" *ngIf="!book.isFavorited">&#9734;</span>
        <span (click)="remove.emit(book)" *ngIf="book.isFavorited">&#9733;</span>
    `
})
export class FavoriteButtonComponent {
    @Input() book: Book;
    @Output() add = new EventEmitter();
    @Output() remove = new EventEmitter();
}
