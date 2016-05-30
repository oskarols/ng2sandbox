import {Component, Input} from "@angular/core";
import {Hero} from "./heroes.service";
import {LoadingIndicator} from './loading-indicator.component';

@Component({
    selector: 'heroes-list',
    template: `
    <loading-indicator [resource]="heroes"></loading-indicator>
    <ul>
        <li *ngFor="let hero of heroes">
            <span>{{hero.name}}</span>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
    directives: [LoadingIndicator]
})
export class HeroesListComponent {
    @Input() heroes: Hero[]
}
