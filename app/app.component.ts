import { Component, OnInit } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './heroes.service';
import {ModalWindowComponent} from './modal-window.component';
import {Router} from '@angular/router-deprecated';
import {KeypressThingyComponent} from './keypress-thingy.component';
import {ClockIndicatorComponent} from './clock-indicator.component';

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }
])
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES, ModalWindowComponent, KeypressThingyComponent, ClockIndicatorComponent],
    providers: [ROUTER_PROVIDERS, HeroService]
})
export class AppComponent {
    title = "Tour of heroes";

    constructor(private router: Router) {

    }

    navigateToPlace() {
        debugger;
    }
}
