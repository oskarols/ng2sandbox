import {Injector, Provider, ReflectiveInjector, provide} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {provideStore, Store, Dispatcher} from '@ngrx/store';
import {
    MOCK_EFFECTS_PROVIDERS,
    MockStateUpdates
} from '@ngrx/effects/testing';

import {POLL_BOOKS, POLL_BOOKS_STOP, POLL_BOOKS_START} from './../reducers/polling';
import {PollingEffect} from './polling.effect';
import {AsyncScheduler} from 'rxjs/Scheduler/AsyncScheduler';
import {async,it,describe,expect,inject,beforeEach,beforeEachProviders} from '@angular/core/testing';
import {TestScheduler} from 'rxjs/testing/TestScheduler';
import { filter } from 'rxjs/operator/filter';
// import {hot, cold, expectObservable, expectSubscriptions, time} from 'rxjs/spec/helpers/marble-testing';

// interface FauxState {
//   whenAction(...actionTypes: string[]): Observable<any>;
// }


describe('Polling Effect Load', () => {
    let pollingEffect: PollingEffect;
    let updates$: Observable<any>;
    let asyncScheduler: AsyncScheduler;
    let testScheduler: TestScheduler;

    beforeEach(function () {

        let scheduler = new TestScheduler(null);

        let mainState$ = scheduler.createHotObservable("^-----x-----y-----y-----|", {
          x: {type: POLL_BOOKS_START},
          y: {type: POLL_BOOKS}
        });

        const injector = ReflectiveInjector.resolveAndCreate([
            MOCK_EFFECTS_PROVIDERS,
            {provide: Observable, useFactory: () => mainState$},
            {provide: AsyncScheduler, useFactory: () => scheduler},
            PollingEffect
        ]);

        pollingEffect = injector.get(PollingEffect);
        updates$ = injector.get(Observable);
        asyncScheduler = injector.get(AsyncScheduler);


        // updates$.prototype.whenAction = function(...actionTypes: string[]): Observable<any> {
        //   return filter.call(this,
        //     ({ action }: StateUpdate<any>) => actionTypes.indexOf(action.type) > -1
        //   );
        // }


    });

    it('should dispatch products list', (done) => {

        // updates$.sendAction({ type: fromProducts.REQUEST_PRODUCTS });
        //
        // shop.load$
        //     .filter(Boolean)
        //     .subscribe(last => {
        //         expect(last).toEqual({ type: fromProducts.RECEIVED_PRODUCTS, payload: jsonProducts });
        //         done();
        //     });
        done();
    });

    it('should checkout products', (done) => {

        // updates$.sendAction({ type: CHECKOUT_REQUEST, payload: [0, 1] });
        //
        // shop.checkout$
        //     .filter(Boolean)
        //     .subscribe(last => {
        //         expect(last).toEqual({ type: CHECKOUT_SUCCESS, payload: 0 });
        //         done();
        //     });
        done();
    });
});
