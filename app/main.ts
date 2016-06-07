import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store/ng2';
import { booksReducer } from './reducers/books';
import { favoritesReducer } from './reducers/favorites';

bootstrap(AppComponent, [
    provideStore({
        books: booksReducer
    })
]);
