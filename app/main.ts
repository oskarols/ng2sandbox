import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { provideStore, combineReducers } from '@ngrx/store';
import { booksReducer } from './reducers/books';
import {runEffects} from '@ngrx/effects';
import {PollingEffects, schedulerToken} from './effects/polling.effects';
import {compose} from "@ngrx/core/compose";
import {storeLogger} from "ngrx-store-logger";
import {AsyncScheduler} from 'rxjs/scheduler/AsyncScheduler';
import {Scheduler} from 'rxjs/Scheduler';

bootstrap(AppComponent, [
    provideStore(
      compose(
        storeLogger(),
        combineReducers
      )({books: booksReducer})
    ),
    {provide: schedulerToken, useClass: AsyncScheduler},
    runEffects(PollingEffects)
]);
