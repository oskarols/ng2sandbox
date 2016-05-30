import { Component, OnInit } from '@angular/core';
import {HeroesListComponent} from "./heroes-list.component";
import {Hero, HeroService} from "./heroes.service";

@Component({
    selector: 'heroes-listing',
    template: `
        <h3>Heroes list</h3>
        <heroes-list [heroes]="myHeroes"></heroes-list>
    `,
    directives: [HeroesListComponent],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.myHeroes = heroes);
    }

    myHeroes: Hero[];
}
