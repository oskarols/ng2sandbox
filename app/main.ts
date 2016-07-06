import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store/ng2';
import { booksReducer } from './reducers/books';
import {runEffects} from '@ngrx/effects';
import {PollingEffect} from './effects/polling.effect';

bootstrap(AppComponent, [
    provideStore({
        books: booksReducer
    }),
    runEffects(PollingEffect)
]);
