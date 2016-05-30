import {Component, OnInit} from '@angular/core';
import {Hero, HeroService} from './heroes.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(private HeroesService: HeroService) { }

    heroes: Hero[] = [];

    ngOnInit() {
        this.HeroesService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
}
