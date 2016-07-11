import {Observable} from 'rxjs/Observable';
import {Injectable, OpaqueToken, Inject} from '@angular/core';
import {StateUpdates, Effect} from '@ngrx/effects';
import {StoreFormat} from '../store';
import {POLL_BOOKS, POLL_BOOKS_STOP, POLL_BOOKS_START} from './../reducers/polling';
import {AsyncScheduler} from 'rxjs/scheduler/AsyncScheduler';
import "rxjs/add/observable/interval";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/map";
import {Scheduler} from 'rxjs/Scheduler';

const POLLING_INTERVAL = 1000;

export const schedulerToken = new OpaqueToken("Scheduler");

@Injectable()
export class PollingEffects {
  constructor(
    private updates$: StateUpdates<any>,
    private asyncScheduler: Scheduler
  ) {}

  makePoller(sourceObs: any) {
    let self = this;

    return sourceObs
      .filter(({action}: any) => { 
        return [POLL_BOOKS_START, POLL_BOOKS_STOP].indexOf(action.type) > -1;
      })
      // .whenAction(POLL_BOOKS_START, POLL_BOOKS_STOP)
      .switchMap((update) => {
        if (update.action.type === POLL_BOOKS_STOP) return null;

        return Observable.interval(POLLING_INTERVAL, self.asyncScheduler)
          .map(() => {
            return { type: POLL_BOOKS }
          });
      })
  }

  @Effect() startPolling = this.makePoller(this.updates$)

}
