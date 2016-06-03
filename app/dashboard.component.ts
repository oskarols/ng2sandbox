import {Component, OnInit} from '@angular/core';
import {Hero, HeroService} from './heroes.service';
import {BooksToolbarComponent} from './components/books-toolbar.component';
import {BooksListComponent} from './components/books-list.component';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    directives: [BooksToolbarComponent, BooksListComponent]
})
export class DashboardComponent implements OnInit {
    constructor(private HeroesService: HeroService) { }

    heroes: Hero[] = [];

    ngOnInit() {
        this.HeroesService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
}
