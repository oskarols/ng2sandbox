import {Component, OnInit} from '@angular/core';
import {Hero, HeroService} from './heroes.service';
import {BooksToolbarComponent} from './components/books-toolbar.component';
import {BooksListComponent} from './components/books-list.component';
import {FavoritesListComponent} from './components/favorites-list.component';
import {RouteConfig} from '@angular/router-deprecated';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    directives: [BooksToolbarComponent, BooksListComponent, FavoritesListComponent]
})
export class DashboardComponent implements OnInit {
    constructor(private HeroesService: HeroService) { }

    heroes: Hero[] = [];

    ngOnInit() {
        this.HeroesService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
}
