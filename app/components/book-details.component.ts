import {Book} from './../models/book';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'book-details',
    templateUrl: 'app/hero-details.component.html'
})
export class BookDetailsComponent  {
    @Input() book: Book;
}
