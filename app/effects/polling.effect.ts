import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {StateUpdates, Effect} from '@ngrx/effects';
import {StoreFormat} from '../store';
import {POLL_BOOKS, POLL_BOOKS_STOP, POLL_BOOKS_START} from './../reducers/polling';
import {AsyncScheduler} from 'rxjs/scheduler/AsyncScheduler';
import "rxjs/add/observable/interval";
import "rxjs/add/operator/filter";

const POLLING_INTERVAL = 5000;

@Injectable()
export class PollingEffect {
  constructor(
    private updates$: Observable<any>,
    private asyncScheduler: AsyncScheduler
  ) {


  }

  @Effect() startPolling = this.updates$
    .filter(({action}: any) => [POLL_BOOKS_START, POLL_BOOKS_STOP].indexOf(action.type) > -1)
    // .whenAction(POLL_BOOKS_START, POLL_BOOKS_STOP)
    .switchMap((update) => {
      if (update.action.type === POLL_BOOKS_STOP) return null;

      return Observable.interval(POLLING_INTERVAL);
    })
}
