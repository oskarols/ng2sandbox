import {Component, Output, EventEmitter} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreFormat} from './../store';
import {ADD_BOOKS} from './../reducers/books';

@Component({
    selector: 'books-toolbar',
    template: `
        <input [(ngModel)]="searchTerm" type="text" placeholder="search book titles" />
        <button (click)="search.emit(searchTerm)">Add Books</button>
        <p *ngIf="searchTerm">Using search term: {{searchTerm}}</p>
    `
})
export class BooksToolbarComponent {
    searchTerm: string = undefined;
    totalResults: number;

    @Output() search = new EventEmitter();
}
