import { Component, OnInit } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {DashboardComponent} from './components/dashboard.component';
import {Router} from '@angular/router-deprecated';
import {BooksService} from './services/books.service';
import {HTTP_PROVIDERS} from '@angular/http';

@RouteConfig([
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
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, BooksService]
})
export class AppComponent {
    title = "Book Search & Listing";

    constructor(private router: Router) {

    }

    navigateToPlace() {
        debugger;
    }
}
