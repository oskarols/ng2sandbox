import {Component,Input} from '@angular/core';
import {Book} from './../models/book';
import {Observable} from 'rxjs/Rx';

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
    @Input() favorites: Observable<Book>;
}
